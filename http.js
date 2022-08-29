const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("welcome to http module home page")
        res.end();
    }
    if (req.url === "/contact") {
        res.write("welcome to contact page 24/7")
        res.end();
    }
    if (req.url === "/login") {
        res.write("Enter your id and password in query parmerter")
        res.end();
    }
});
server.on("connection", (socket) => {
    console.log("New connection request...");
})
server.listen(5555)

