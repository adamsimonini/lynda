const fs = require('fs'); //fs stands for File System?

if (fs.existsSync('storage-files')) { //checks whether or not a path exists
    console.log('path already exists');
} else {
    fs.mkdir('storage-files', err => {
        if (err) {
            throw err;
        }
        console.log('directory created');
    });
}