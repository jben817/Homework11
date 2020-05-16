const express = require('express');
const fs = require('fs');
const path = require("path");
const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./css'));

// routes
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

// notes
app.get("/api/notes", function(req, res) {
  return res.json(data);
});

// new notes- takes in JSON input
app.post("/api/notes", function(req, res) {
  var newNote = req.body;
  console.log(newNote);
  characters.push(newNote);
  res.json(newNote);
});

app.delete("/api/notes/:id", function(req, res) {
  const index = notes.indexOf(note);
  notes.splice(index, 1);
});



// listening
app.listen(PORT, function() {
    console.log("You are listening on PORT " + PORT);
  });
  