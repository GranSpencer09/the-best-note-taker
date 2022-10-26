const express = require("express");
const path = require("path");
const fs = require("fs");
const suid = require("short-unique-id");

const PORT = process.env.PORT || 3000;

const app = express();

// Neccessary middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Get homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Get notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Read the db.json file and return all saved notes as JSON
app.get("/api/notes", (req, res, next) => {
  fs.readFile("./db/db.json", "utf-8", (err, notes) => {
    if (err) {
      next(err);
    } else {
      res.send(notes);
    }
  });
});

// Receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
app.post("/api/notes", (req, res, next) => {
  // Create new short unique id
  let id = new suid();
  // New object for each new note assigning title and text the values provided
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: id(),
  };
  // Reading notes from db
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // Convert data from db into an object and push the newNote to it
      const notes = JSON.parse(data);
      notes.push(newNote);
      // Write new note to db, must convert it back to JSON
      fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) {
          console.log(err);
        } else console.log("Note was added");
        res.sendStatus(200);
      });
    }
  });
});

// Receives a query parameter containing the id of a note to delete. In order to delete a note, we read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
app.delete("/api/notes/:id", (req, res, next) => {
  // Reading notes from db
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let notes = JSON.parse(data);
      // Removing note with given id property
      let notesToKeep = notes.filter((note) => note.id !== req.params.id);
      // Write the notes to the db, this won't have the note with given id property
      fs.writeFile("./db/db.json", JSON.stringify(notesToKeep), (err) => {
        if (err) {
          console.log(err);
        } else console.log("Note was deleted");
        res.sendStatus(200);
      });
    }
  });
});

app.listen(PORT, () => console.log(`App listing on port ${PORT}`));
