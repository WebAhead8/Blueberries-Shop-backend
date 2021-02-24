const model = require('../model/products')

function addProductHandler(req, res, next) {
  const body = req.body
  model
    .addProduct(body)
    .then(product => {
      res.status(201).send(product)
    })
    .catch(next)
}

module.exports = addProductHandler
