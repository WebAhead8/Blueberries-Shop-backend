
require("dotenv").config();
const jwt = require('jsonwebtoken');
const model=require("../model/users");
function verfyAdmin(req,res,next)
{
    const auth=req.headers.authentication;
    console.log(auth);
    if (!auth) {
        const error = new Error("bad request");
        error.status = 400;
        next(error);
      }
      try {
        const token =auth.replace('Bearer ','');
        const userID = jwt.verify(token, process.env.JWT_SECRET);
        console.log(userID)
        model.getUserById(userID.user).then(data=>{
            console.log(data);
            if(data.type==="admin")
            next();
            else{
                const error = new Error("not An Admin");
                error.status = 401;
                next(error);
            }
        }).catch(next)
      } catch(er){
          const error = new Error("Invalid token");
          error.status = 401;
          next(error);
      }
}

module.exports = verfyAdmin;