const model = require('../model/users')



function getAllComments(req, res, next) {
    model.getAllComments()
        .then(products => {
            res.send(products);
        })
}

module.exports = getAllComments;