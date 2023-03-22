
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

app.get("/magic/:question", (req,res) => {
    const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    const magic = Math.floor(Math.random() * arr.length);
    res.send(`${arr[magic]}`);
})

 app.listen(process.env.PORT, () => {
    console.log(`Listening👂 💡 P🍩RT:${process.env.PORT}`)
 });