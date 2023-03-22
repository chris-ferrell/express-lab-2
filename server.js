
const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req,res) => {
    res.send("Default Route.")
})
app.get("/greetings/:name", (req,res) => {
    const name = req.params.name;
    res.send(`Hi ${name}`)
})

 app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT:${process.env.PORT}👂`)
 });