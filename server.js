
const express = require("express");
const app = express();
require("dotenv").config();




 app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT:${process.env.PORT}👂`)
 });