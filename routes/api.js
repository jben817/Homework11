const router = require("express").Router();
const fs = require("fs");

var data = require("../db/db.json");
console.log(data)

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
  console.log("id:",req.params.id)
  //var deleteNote = data.find(c=> c.id === parseInt(req.params.id));
 // var index = data.indexOf(deleteNote);
//  data.splice(index);

  var newNotes = data.filter(elem=> elem.id !== parseInt(req.params.id))
  console.log(newNotes)
  data = newNotes
  // you need to rewrite the file
  fs.writeFileSync("./db/db.json", JSON.stringify(data, 0, 1, 2));

  res.json(data);
  
});

module.exports = router;
