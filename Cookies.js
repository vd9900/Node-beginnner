const express = require("express");
const cookiesParser = require("cookies-parser")
const app = express()

const Router = express.Router();

app.use("/",Router)

Router.route("/home").get(homeGET)

function homeGET(req,res){
    res.send("welcome to home page")
}
app.listen(3333)