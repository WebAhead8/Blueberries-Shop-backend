const model = require('../model/products')

function updateQuantity (req, res, next) {
  const data = req.body

  model.updateQuantity(data).then(product => {
    res.send(product)
  })
}
module.exports = updateQuantity
