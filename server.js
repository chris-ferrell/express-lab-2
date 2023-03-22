
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
app.get("/tip/:bill/:percentage", (req,res) => {
    const percentage = req.params.percentage;
    const whole = req.params.bill;
    let tip = (percentage * whole) / 100;
    res.send(`Tip: ${tip}`)
})

 app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT:${process.env.PORT}👂`)
 });