const model = require("../model/updateProducts");


function updateProducts(req , res , next)
{
    const id = req.params.id;

    model.updateProducts(id)
    .then(product=>{
        res.send(product);
    })
}
module.exports= updateProducts;