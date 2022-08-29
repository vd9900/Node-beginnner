
// Task 
// Syncly making new dir & file
// updating the file
// get file data in variable
// rename file
// delete dir & file


const fs = require("fs");
const user = {"Name":"Vinith"};
const address ={ "address":"1240-boron USA"}
// fs.mkdirSync("Node")
// fs.writeFileSync("Node/g.txt",`User : ${user.Name}`)
fs.appendFileSync("Node/g.txt",`\nAddress : ${address.address}`);
// fs.readFileSync("Node/g.txt","utf8",(error,data)=>{
//     console.log(data)
// })
// or
const userDetail = fs.readFileSync("Node/g.txt","utf8")
// console.log(userDetail);
// fs.unlinkSync("Node/g.txt")
// fs.rmdirSync("Node")
// Note: when using Asyncornally must to use callback at the last argument
// fs.writeFile("Node/v.txt","Hello C",(err)=>{
//     if(err){
//         console.log("failed to create a file")
//     }else{
//         console.log("New file added ");
//     }
// })
fs.rename("Node/g.txt","call.txt",()=>console.log("file name changed"))