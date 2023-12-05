const mongoose = require("mongoose")


const HostelSchema  = new mongoose.Schema({

    type : String,
    room : String
})

const HostelModal = mongoose.model("hostel" , HostelSchema)

module.exports = HostelModal;