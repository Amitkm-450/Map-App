const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();



mongoose.connect('mongodb://127.0.0.1:27017/Pin')
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));



app.listen(8800, () => {
  console.log("Backend server is running!");
});