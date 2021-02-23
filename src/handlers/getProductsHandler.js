const path = require('path')

const model = require(path.join(__dirname,'..','model','products')


function getAll(req , res , next){
    model.getAllProducts()
    .then(products=>{
        res.send(products);
    })
}

module.exports = getAll;