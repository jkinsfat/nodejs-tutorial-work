const EventEmitter = require("events").EventEmitter;
var util = require("util");

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, EventEmitter);

var ben = new Person("Benjamin Franklin");

ben.on("speak", function(speech) {
    console.log(`${this.name}: ${speech}`)
});

ben.emit("speak", "You may delay, but time will not")

// emitter.on("customEvent", function(message, status) {
//     console.log(`${status}: ${message}`);
// });
//
// emitter.emit("customEvent", "Hello World", 200)
