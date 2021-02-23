const { get } = require('http')
const path = require('path')
const db = require(path.join(__dirname, '..', 'database', 'connection'))

// this function will return all the data from the product table
function getAllProducts () {
  return db.query(`SELECT * from products`).then(result => {
    return result.rows
  })
}

// gets every product by its Id
function getProductsById (prductId) {
  return db
    .query(`SELECT * FROM products WHERE id = ($1)`, [prductId])
    .then(result => {
      return result.rows[0]
    })
}

// function that adds products

function addProduct (product) {
  const productDetails = [
    product.name,
    product.description,
    product.image,
    product.price,
    product.quantity,
    product.category
  ]

  return db
    .query(
      `INSERT INTO products (name, description, image, price, quantity, category) VALUES ($1,$2,$3,$4,$5,$6) returning *`,
      productDetails
    )
    .then(result => {
      return result.rows
    })
}

function deleteProduct (prductId) {
  return db
    .query(`DELETE FROM products WHERE id = ($1)`, [prductId])
    .then(result => {
      return result
    })
}

function updatePrice (data) {
  return db
    .query(`UPDATE product SET price = $1 WHERE id =$2`, [data.price, data.id])
    .then(result => {
      return result
    })
}

function updateQuantity (data) {
  return db
    .query(`UPDATE product SET quantity = $1 WHERE id =$2`, [
      data.quantity,
      data.id
    ])
    .then(result => {
      return result
    })
}

module.exports = {
  getAllProducts,
  getProductsById,
  addProduct,
  deleteProduct,
  updatePrice,
  updateQuantity
}
