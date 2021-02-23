
require("dotenv").config();
const jwt = require('jsonwebtoken');
function verfyAdmin(req,res,next)
{
    if (!auth) {
        const error = new Error("bad request");
        error.status = 400;
        next(error);
      }
      try {
        const token =auth.replace('Bearer ','');
        const userID = jwt.verify(token, process.env.JWT_SECRET);
        users.getUserById(userID.user).then(data=>{
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

module.exports = verfy;