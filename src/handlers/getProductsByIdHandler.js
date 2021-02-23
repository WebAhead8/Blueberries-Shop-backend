const model = require('../model/products')



function getById(req , res , next)
{
    const id = req.params.id;
    model.getProductsById(id)
    .then(product=>{
        res.send(product);
    })
}

module.exports = getById;