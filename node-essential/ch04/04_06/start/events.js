const events = require('events');

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

// emitter.emit([eventName], [parameters...]);
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "Who is John Galt?", "Atlas");

emitter.on('divineWisdom', (a, b) => {
    console.log(`${b} says "${a}"`);
});

emitter.emit('divineWisdom', 'Happy is he who repays the infidel for what they have done to us – he who seizes their infants and dashes them against the rocks.', 'Yahweh');

