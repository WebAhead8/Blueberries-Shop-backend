const model = require("../model/products");

function getAll(req , res , next){
    model.getAllProducts()
    .then(products=>{
        res.send(products);
    })
}

module.exports = getAll;