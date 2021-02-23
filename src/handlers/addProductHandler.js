const path = require('path')

const model = require(path.join(__dirname,'..','model','products')

function addProductHandler (req, res, next) {
  const body = req.body
  model
    .addProduct(body)
    .then(product => {
      res.status(201).send(product)
    })
    .catch(next)
}

module.exports = addProductHandler
