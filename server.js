const express = require('express');
const fs = require('fs');
const path = require("path");
const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes
const htmlRoutes = require("./routes/html")


// listening
app.listen(PORT, function() {
    console.log("You are listening on PORT " + PORT);
  });
  