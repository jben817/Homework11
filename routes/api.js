// const express = require("express");
// const router = express.Router();
const router = require("express").Router();
const fs = require("fs");

var data = require("../db/db.json");
//var data = fs.readFileSync("../db/db.json", "utf-8");


// notes
router.get("/api/notes", function (req, res) {
  return res.json(data);
});

// new notes- takes in JSON input
router.post("/api/notes", function (req, res) {
  var newNote = req.body;
  

  var lastId = data[data.length - 1].id;
  newNote.id = lastId + 1;

  console.log(newNote);

  data.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(data, 0, 1, 2));

  res.json(newNote);
});

router.delete("/api/notes/:id", function (req, res) {
  var deleteNote = data.find(c=> c.id === parseInt(req.params.id));
  var index = data.indexOf(deleteNote);
  data.splice(index);
  
});

module.exports = router;
