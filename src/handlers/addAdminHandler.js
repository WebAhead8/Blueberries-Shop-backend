const bcrypt = require("bcryptjs");
const model = require("../model/users.js")

function addAdminHandler(req, res, next) {
    let body = req.body;
    const pass = req.body.password;
    bcrypt
        .genSalt(12)
        .then(salt => bcrypt.hash(pass, salt))
        .then(hash => {
            body.password = hash;
            model.addAdmin(body)
        }).then(data => {
            res.status(200).send(data)
        })
        .catch(next)
}

module.exports=addAdminHandler;