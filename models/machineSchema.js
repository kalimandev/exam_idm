const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const machineSchema = new Schema({
    nom : { type: String },
     ip: { type: String },
     os: { type: String },
     etat : {type : Boolean}
})

module.exports = mongoose.model("Machine", machineSchema );