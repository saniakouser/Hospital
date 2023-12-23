const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
    Doctorname: {
        type: String,
        required: true,
      },
   date: {
    type: String,
    required: true,
  },
   startTime: {
    type: String,
    required: true,
  },
   endTime: {
    type: String,
    required: true,
  },
  
});

const Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;

