const express = require("express");
const app = express();
let bottles = 99;
app.get("/", (req,res) => {
    res.send("<h1>99 Bottles of beer on the wall</h1> \n <body><a href='/98'> take one down, pass it around</a></body>");
   
})

app.listen(3000, () => {
    console.log("pass it around Listening");
})


app.get("/98", (req,res) => {
    res.send("1")
})

