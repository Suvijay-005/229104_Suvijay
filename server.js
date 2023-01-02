const express=require("express");
const app=express();
var path=require("path");

app.get("/",function(req,resp){
resp.sendFile(path.join(__dirname,"./public/index1.html"));

});

app.get("/schedule",function(req,resp){
resp.sendFile(path.join(__dirname,"./public/index2.html"));

});

app.listen(8000);
console.log("Server listening at port 8000");