const express = require("express")
const fs = require("fs")
const app = express();

app.get("/", (rq, rs) => {
    rs.send("This home page")
})
app.get("/aboutus", (rq, rs) => {
    rs.send("This is about us page")
})
app.get("/contact", (rq, rs) => {
    fs.writeFile("greet.txt", "Hello friends welcome to home page", (e, data) => {

        fs.readFile("greet.txt", (e, data) => {
            rs.send(data) 
        })
    })
})



app.listen(3000)