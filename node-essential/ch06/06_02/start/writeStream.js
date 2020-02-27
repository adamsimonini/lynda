const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/myFile.txt', 'UTF-8');
const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');

// we are writing output to a file, as opposed to the terminal
// writeStream.write('hello');
// writeStream.write(' world\n');

// take the readStream and for each bit of data write it to the writeStream
// readStream.on('data', data => {
//     writeStream.write(data);
// })

// simplest way to copy data over; instead of using the event listener "on", simply use the "write" method
readStream.pipe(writeStream);
