const model = require("../model/getAllProducts");

function getAll(req , res , next){
    model.getAllProducts()
    .then(products=>{
        res.send(products);
    })
}

module.exports = getAll;