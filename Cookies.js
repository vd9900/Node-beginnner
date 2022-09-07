const express = require("express");
const cookiesParser = require("cookies-parser")
const app = express()

const Router = express.Router();

//user  
const user = {
    user :"vinith"
}

app.use("/",Router)

Router.route("/home").get(homeGET)
Router.route("/setuser").get(setUserGET)

function setUserGET(req,res) {
    res.cookies("user",user)
    res.send("Your account created you can go now to dashboard")
}
function homeGET(req,res){
    res.send("welcome to home page")
}
app.listen(3333)