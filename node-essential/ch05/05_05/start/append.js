const fs = require('fs');
const colorData = require('./assets/colors.json');

colorData.colorList.forEach(c => { // c is simply the a single element of the looped array
    fs.appendFile('./storage-files/colors.md', `${c.color}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});

