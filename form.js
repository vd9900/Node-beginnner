const fs = require("fs")
const express = require("express")
const bodyparser = require("body-parser")
const app = express();
app.use(bodyparser.json())
app.get("/form",(req,res)=>{
    res.sendFile("form.html",{root:__dirname})
})
app.post("/form",(req,res)=>{
    console.log(req.body)
    res.send("data recieed")
})
app.listen(2222)