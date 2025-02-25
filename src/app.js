const express = require("express");
 const app = express();

 app.use("/" , (req , res) =>{
   res.send("sever is running over 3000 port");
 });

 app.listen(3000,() =>{
    console.log("server is started");
 });