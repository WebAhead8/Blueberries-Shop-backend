const express = require("express");
const loginHandler=require("./src/handlers/loginHandler");
const addUserHandler=require("./src/handlers/addUserHandler");

const PORT = process.env.PORT || 4000;

const server = express();
server.use(express.json());

server.post("/login",loginHandler);
server.post("/adduser",addUserHandler);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));