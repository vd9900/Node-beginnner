//First install nodemon to make automatic restart the page when we save the code
"use strict"
const experss = require("express");
const bodyparser = require("body-parser")
const fs =  require("fs")
const app  = experss();
app.use(bodyparser.json())
app.get("/home",(req,res)=>{
    res.send("hello")
})   
app.get("/help",(req,res)=>{
    res.send("this help page")
})
app.post("/form",(req,res)=>{
    console.log(req.body.email);
    console.log(req.body.name);
    // console.log(req.body)
    res.send("data received!")
})
app.get("/",(req,res)=>{
    res.sendFile("index.html",{root:__dirname})
})
app.post("/login",(req,res)=>{
    if(req.body.username==="admin" && req.body.password === "12345"){
        res.sendFile("userdashboard.html",{root:__dirname})
        console.log("user login successful");
    }else{
        res.send("worng password or username !")
        console.log("user login unsuccessful");
    }
})
app.post("/contact",(req,res)=>{
    fs.writeFile("Node/contact.txt",`${JSON.stringify(req.body)}`,()=>console.log("data stored in file system"))
    res.send("user data stored in database")
})
app.listen(7777,()=>console.log("sever started")) 