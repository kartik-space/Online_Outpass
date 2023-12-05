const express = require("express")
const mongoose = require("mongoose")
const cors  = require("cors")


const EmloyeeModal = require("./models/Employee")
const OutpassModel = require("./models/Outpass")
const HostelModal = require("./models/Hostel")


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/DBMS")
.then(() => {
    console.log("mongodb connected");
})
.catch(() => {
    console.log("error")
})


app.post('/' , (req,res) => {
    const {email, password } = req.body
    EmloyeeModal.findOne({email: email})
    .then( user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("no such user exists")
        }
    })
})

app.get('/home' , (req,res) => {
    EmloyeeModal.find()
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/register' , (req,res) => {
    EmloyeeModal.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/outpass' , (req,res) => {
    OutpassModel.create(req.body)
    .then(outpass => res.json(outpass))
    .catch(err => res.json(err))
})

app.get('/hostel' , (req,res) => {
    HostelModal.find()
    .then(hostel => res.json(hostel))
    .catch(err => res.json(err))
})

app.listen(3002,()=>{
    console.log("server is running ")
})
