const fs = require('fs');

// const text = fs.readFileSync('./assets/Readme.md', 'UTF-8'); syncronized, meaning it will hold up the rest of the js file until completed
fs.readFile('./assets/alex.jpg', (err, img) => {
    if (err) {
        throw err;
    }
    console.log('file contents read');
    console.log(img);
});


