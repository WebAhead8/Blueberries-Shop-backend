const model=require("../model/users")
const jwt = require('jsonwebtoken');


function addUserHandler(req,res,next)
{
    const body=req.body;
    model.addUser(body).then(user=>{
        const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const response = {
            id: user.id,
            name: user.name,
            email: user.email,
            access_token: token
        };
        res.status(201).send(response);
    }).catch(err=>{
        if(err.code==="23505")
        {
            const error = new Error("email Already Exist");
            error.status=404;
            next(error);
        }
        else{
            next(err)
        }
    })
}

module.exports = addUserHandler
