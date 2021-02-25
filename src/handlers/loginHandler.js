const model = require("../model/users")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
function login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    model.getUser(email, password).then(result => {
        console.log(process.env.JWT_SECRET);
        if (result) {

            const token = jwt.sign({ user: result.id }, "lskfnlsdkn", { expiresIn: "1h" });
            res.status(200).send({ access_token: token })
        } else {
            const error = new Error("no user Found");
            error.status = 404;
            next(error);
        }
    }).catch(next)


}
module.exports = login;