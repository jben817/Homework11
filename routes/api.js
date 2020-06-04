var noteArray = [
    {
      title: "",
      note: "",
          }
  ];

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
  
