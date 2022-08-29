const express = require("express");
const app = express();
const router = express.Router();
router.get("/contact",(req,res)=>{
    let id = req.query.id,state = req.query.state;
    console.log(id,state);
   res.send(`name : ${id}
    state : ${state}
   `)
})
app.use("/",router)
app.listen(5555)