const path = require('path')

const model = require(path.join(__dirname,'..','model','products')



function updatePrice(req , res , next)
{
    const data = req.body;
    
    model.updatePrice(data)
    .then(product=>{
        res.send(product);
    })
}
module.exports= updatePrice;