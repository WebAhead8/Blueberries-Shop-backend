const model = require('../model/users')

function addCommentHandler(req, res, next) {
    const body = req.body
    model
        .addComment(body)
        .then(comment => {
            res.status(201).send(comment)
        })
        .catch(next)
}

module.exports = addCommentHandler
