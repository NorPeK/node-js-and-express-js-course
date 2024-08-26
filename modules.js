//Modules are CommonJS, every file is module (by default)
//Modules are encapsulated code (only shar minimum)
const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-flavor");
console.log(names);
console.log(sayHi);
console.log(data);
sayHi("NorPeK");
sayHi(names.john);
sayHi(names.peter);