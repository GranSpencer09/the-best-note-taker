# Notetaker

## Description

With this simple application, users can create notes or to-do's to keep their lives organized. This application will use an Express.js back end and will save and retrieve note data from a JSON file. Finally, the app is deployed to [Heroku](https://the-best-note-taker-09.herokuapp.com/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [images](#images)
- [Credits](#credits)
- [Features](#features)
- [Contribute](#contribute)

## Installation

What are the steps required to install your project? Provide a step-by-step
description of how to get the development environment running.

    1. Navigate to the code repository
    2. Press the green code button, located near the about section
    3. Copy either the HTTPS, Git CLI, download the zip, open with GitHub desktop, or copy the SSH link.
    4. Depending on download method, use Git, executable, or the desktop application to open the content files.
    5. All of the content of the repository will be available after completion of the previous state.

## Usage

When you open the Note Taker, you're presented with a landing page with a link to a notes page. Click on the link to the notes page, and you are presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column. When you enter a new note title and the note’s text, a Save icon appears in the navigation at the top of the page. When you then click on the Save icon, the new note you've entered is saved and appears in the left-hand column with the other existing notes. This note will also be saved to the db/bd.json file in the directory, so you can see what notes you've stored. You can click the trash can or delete button to remove any existing notes.

### Images

![alt text](assets/homepage.png)
![alt text](assets/where-to-type.png)
![alt text](assets/where-to-delete.png)

## Credits

I worked with my tutor and classmates to finish this. I also chose to use the [Short Unique Id (UUID) Library](https://github.com/simplyhexagonal/short-unique-id) for this assignment.

## Features

Db.json file on the back end that is used to store and retrieve notes using the fs module.
I use the Short Unique ID (UUID) Generating Library to give each note a unique id when it's saved.
I've also included the delete function.

## Contribute

Feel free to clone and make edits as you seem neccessary.
