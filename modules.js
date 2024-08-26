//Modules are CommonJS, every file is module (by default)
//Modules are encapsulated code (only shar minimum)
const names = require("./names");
const sayHi = require("./utils");
console.log(names);
console.log(sayHi);
sayHi("NorPeK");
sayHi(names.john);
sayHi(names.peter);