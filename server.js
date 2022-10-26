const express = require("express");
const { fstat } = require("fs");
const path = require("path");
const notes = require("./db/db.json");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const app = express();

// Neccessary middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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
  fs.readFile("./db/db.json", (err, notes) => {
    if (err) {
      next(err);
    } else {
      res.send(notes);
    }
  });

  //res.json(notes);
});

// Receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
app.post("api/notes", (req, res) => {});

app.listen(PORT, () => console.log(`App listing on port ${PORT}`));
