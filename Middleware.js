const express = require("express");
const app = express();

// Golbal middlewares
app.use(golbal)



// routes
const router = express.Router();
// landing page
router.get("/",(req,res)=>{
    console.log("home page ")
    res.send("home page ")
})
// login page
router.get("/login",auth,(req,res)=>{

    res.send("WELCOME BACK USER")
})


// server 
app.use("/",router)

// listening the port
app.listen(5555)

// functions

function golbal(req,res,next){
    console.log("before")
    next();
    console.log("after");
}

// authontication function
function auth(req,res,next){
    if(req.query.auth === "true"){
        console.log("user login succsessful")
        next()       
    }else{
        res.send("login failed")
    }
}
