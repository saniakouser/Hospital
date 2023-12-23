const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
  Doctorname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  
});

const Clinic = mongoose.model("Clinic", clinicSchema);


module.exports = Clinic;

