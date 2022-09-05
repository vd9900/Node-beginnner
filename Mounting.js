const express = require("express")
const app = express()


app.use(express.json())

// Example obj of the users

const Users = [
    { id: 1, name: "vinith" },
    { id: 2, name: "vin" },
    { id: 3, name: "vi" }
]


// Mountiing is basically to make clean code and readable in code like in all crud methods will messy around so we 
// use montuning idology


// makeing one main route to target the all crud method for that route
const UserRouter = express.Router();

// now we need use this in app to push this in server

app.use("/", UserRouter)//here "/" is the first route  like landing page

// now we can write new Route or add new CRUD methods to that Route

// langing page
UserRouter.route("/").get(userGET)

// all user page
UserRouter.route("/allusers").get(allUsersGET)

// get user by name
UserRouter.route("/:id").get(userByIdGET)

// add user to server
UserRouter.route("/addUser").post(userAddPOST)



// all function which doing deffernt type of methods
// GET method

function userGET(req, res) {
    res.send("Hello this home page of user")
}

function allUsersGET(req,res){
    console.log("user accessing all users");
    res.send(Users)
}

function userByIdGET(req,res){
    Users.forEach((user)=>{
        if(user.id == req.params.id){
            res.send(user)
        }else{
            res.send("User not Founded")
        }
    })
}


//POST method
function userAddPOST(req, res) {
    console.log(req.body);
    res.send("data recieved!")
}