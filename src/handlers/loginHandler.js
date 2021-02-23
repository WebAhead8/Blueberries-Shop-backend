

function login(req,res,next){
    const user=req.body;
    users.getUser(user.email,user.password).then(userdetails=>{
        if(userdetails.email===user.email&&userdetails.password===user.password){
            const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.status(200).send({ access_token: token })
        }else{
            const error = new Error("no user Found");
            error.status=404;
            next(error);
        }
    }).catch(next)
}
module.exports = login;