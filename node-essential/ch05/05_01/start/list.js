const fs = require('fs');

// const files = fs.readdirSync('./assets');

// asyncronys file reading via callback function
fs.readdir('./assets', (err, files) => {
    if (err) {
        throw err;
    }
    console.log('complete')
    console.log(files);
});

console.log('started reading files...');