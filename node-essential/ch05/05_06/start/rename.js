const fs = require('fs');

// fs.renameSync('./assets/colors.json', './assets/colorData.json');

fs.rename('./assets/notes.md', './storage-files/nodes.md', err => {
    if (err) {
        throw err
    }
});

setTimeout(() => {
    // this just means to delete
    fs.unlinkSync('./assets/alex.jpg');
}, 4000);