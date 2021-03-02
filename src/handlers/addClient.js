const model = require('../model/users')
const bcrypt = require("bcryptjs");
function addCommentHandler(req, res, next) {
    let body = req.body
    const password = body.password;
    bcrypt.genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => {
            body.password = hash
            model
                .addClient(body)
                .then(comment => {
                    res.status(200).send(comment)
                })
                .catch(next)
        })


}

module.exports = addCommentHandler
