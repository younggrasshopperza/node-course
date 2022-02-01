// We are calling the require function to load the fs module (file system module)
const fs = require('fs');
// We are now able to use the fs function which allows us to create and write into a file

// Create the notes.txt file and write text in the file
fs.writeFileSync('notes.txt', 'This file was created by Node.js');

// This will overwrite the previous notes create previously above.
fs.writeFileSync('notes.txt', 'Welcome to my first Node tutorial. ');

// This will append (add on) the text in the notes.txt
fs.appendFileSync('notes.txt', 'We are on our way to being a Node.js Developer');