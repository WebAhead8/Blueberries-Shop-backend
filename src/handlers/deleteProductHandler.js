const model = require("../model/products");


function deleteProductHandler(req,res,next){
    const productID = req.params.id;
    model.getProduct(productID).then(productData=>{
        model.deleteProduct(productID).then(data=>{
            res.status(204).send({});
        })
        .catch(next)

    })
    .catch(next)

}

module.exports = deleteProductHandler;