const model = require("../model/users")
const jwt = require('jsonwebtoken');

function getUserToken(req, res, next) {
    const token = req.body.access_token;
    const userID = jwt.verify(token, process.env.JWT_SECRET);

    model.getUserById(userID.user).then(result => {
        if (result) {
            res.status(200).send(result);
        } else {
            const error = new Error("no user Found");
            error.status = 404;
            next(error);
        }
    }).catch(next)


}
module.exports = getUserToken;