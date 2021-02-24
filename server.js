const express = require("express");
const loginHandler=require("./src/handlers/loginHandler");
const addUserHandler=require("./src/handlers/addUserHandler");
const addProductHandler=require("./src/handlers/addProductHandler");
const verfyAdmin=require("./src/middleware/verfyAdmin");
const getProductById=require("./src/handlers/getProductsByIdHandler");
const deleteProductHandler=require("./src/handlers/deleteProductHandler");
const getProductsHandler=require("./src/handlers/getProductsHandler");
const updatePrice=require("./src/handlers/updatePrice");
const updateQuantity=require("./src/handlers/updateQuantity");

const PORT = process.env.PORT || 4000;

const server = express();
server.use(express.json());

server.post("/login",loginHandler);
server.post("/adduser",addUserHandler);
server.post("/addproduct",verfyAdmin,addProductHandler);
server.put("/updateprice",verfyAdmin,updatePrice);
server.put("/updatequantity",verfyAdmin,updateQuantity);
server.get("/products/:id",getProductById);
server.get("/products",getProductsHandler);
server.delete("/products/:id",deleteProductHandler);



server.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.status(404).send("<h1>URL Not Found</h1>");
  }

});


server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));