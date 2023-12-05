const mongoose = require("mongoose");

const OutpassSchema = new mongoose.Schema({
    reason: String,
    name: String,
    rollno: String,
    email: String,
    address: String,
    city: String
})

const OutpassModel = mongoose.model("outpasses", OutpassSchema)

module.exports = OutpassModel;
