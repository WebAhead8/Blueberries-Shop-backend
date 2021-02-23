const path = require('path')

const model = require(path.join(__dirname,'..','model','products')


function getById(req , res , next)
{
    const id = req.params.id;
    model.getProductsById(id)
    .then(product=>{
        res.send(product);
    })
}

module.exports = getById;