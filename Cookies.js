const express = require("express");
const cookiesParser = require("cookie-parser")
const app = express()
cookiesParser()

const Router = express.Router();

app.use(cookiesParser())


//user Object
const user = {
    user :"vinith"
}
app.use("/",Router)

Router.route("/home").get(homeGET)
Router.route("/setuser").get(setUserGET)
Router.route("/getuser").get(getUserGET)

function setUserGET(req,res) {
    res.cookie("user",user)
    res.send("Your account created you can go now to dashboard")
}
function getUserGET(req,res) {
 
    res.send(req.cookies.user)
}
function homeGET(req,res){
    res.send("welcome to home page")
}
app.listen(3333)