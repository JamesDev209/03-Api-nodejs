require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const { router } = require("./routes")


app.use(cors());


//guardar elm port en una variable

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log('server corriendo', PORT))