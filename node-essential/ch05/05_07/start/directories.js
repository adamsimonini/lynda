const fs = require('fs');

// fs.renameSync('./storage-files', './storage');

//  by forcing syncronicity, you ensure this process runs before the one below, which is required
fs.readdirSync('./storage').forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});


fs.rmdir('./storage', err => {
    if (err) {
        throw err;
    }
    console.log('./storage directory removed');
})
