const model = require('../model/products')


function buyHandler(req, res, next) {
  const card = req.body
  const keysArr = Object.keys(card)
  for (let i of keysArr) {
    model.getProductsById(i).then(data => {
      const currentQuantity = data.quantity
      const cardQuantity = card[i]
      const sub = currentQuantity - cardQuantity
      model.updateQuantity({ id: i, quantity: sub }).catch(next)
    }).catch(next)
  }
  res.status(200).send({ status: 200, message: "updated" })
}
module.exports = buyHandler
