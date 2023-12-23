 const express=require("express");
 const app=express();
const connectToDatabase = require("./Database");
connectToDatabase();
const port = 3000;
const Doctor = require("./models/Doctor");
const Slot = require("./models/Slot");
const Fee = require("./models/Fees");
const Clinic = require("./models/Clinic");


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
