const express = require('express');
const app = express();
 
// Set up a global variable to store the current number of bottles
let numBottles = 99;

// Define a route for the home page
app.get('/', (req, res) => {
  res.send(`
    <h1>${numBottles} Bottles of beer on the wall</h1>
    <a href="/${numBottles - 1}">take one down, pass it around</a>
  `);
});

// Define a route that takes a number of bottles as a parameter
app.get('/:number_of_bottles', (req, res) => {
  const { number_of_bottles } = req.params;

  if (number_of_bottles == 0) {
    
    res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <a href="/">start over</a>
    `);
  } else {
    res.send(`
      <h1>${number_of_bottles} Bottles of beer on the wall</h1>
      <a href="/${number_of_bottles - 1}">take one down, pass it around</a>
      <br>
      
    `);
  }
});

// Start the server
app.listen(3000, () => console.log(`Listening on 🅿️ 🍩R🌵:3000 📶`));