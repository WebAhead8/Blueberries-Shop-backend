const path = require('path')

const model = require(path.join(__dirname,'..','model','products')


function updateQuantity(req , res , next)
{
    const data = req.body;
    
    model.updateQuantity(data)
    .then(product=>{
        res.send(product);
    })
}
module.exports= updateQuantity;