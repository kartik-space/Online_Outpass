const mongoose = require("mongoose")


const EmployeeSchema  = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const EmloyeeModal = mongoose.model("employees" , EmployeeSchema)

module.exports = EmloyeeModal;