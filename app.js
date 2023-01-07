require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//my routes
const newsRoutes = require("./routes/news");


const connectDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
     }).then(() => {
         console.log("DB connected");
     }).catch(
         console.log("DB not connected")
     );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Middlewear
 app.use(bodyParser.json());
 app.use(cookieParser());
 app.use(cors());

//My Router
app.use("/api", newsRoutes);

//Port
const port = process.env.PORT || 5000;

//Starting server
connectDB().then(() => {
    app.listen(port, () => {
        console.log("listening for requests");
    })
})

// DB connection

