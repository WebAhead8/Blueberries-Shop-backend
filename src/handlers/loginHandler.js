const model = require("../model/users")
const jwt = require('jsonwebtoken');

function login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    model.getUser(email, password).then(result => {
        if (result) {
            const token = jwt.sign({ user: result.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.status(200).send({ access_token: token })
        } else {
            const error = new Error("no user Found");
            error.status = 404;
            next(error);
        }
    }).catch(next)


}
module.exports = login;