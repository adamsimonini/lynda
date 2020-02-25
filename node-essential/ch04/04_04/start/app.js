const counter = require('./myModule');

counter.inc()
counter.inc()
counter.inc()
counter.dec();

console.log(`Not destructured: ${counter.getCount()}`);

// destructuring allows us to call the methods directly, without the syntax of the object they are methods of
const {inc, dec, getCount} = require('./myModule');

inc()
inc()
inc()
dec();

console.log(`Destructured: ${getCount()}`);

// both affect the count variable within myModule.js, and so the one works off of the other, hence the result being "4" as opposed to "2"