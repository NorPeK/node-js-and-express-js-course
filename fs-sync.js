const {readFileSync, writeFileSync} = require("fs"); // same as const fs = require ("fs"); fs.readFileSync();
// first we need to destructure the map

const first = readFileSync("./content/first.txt" , 'utf8');
const second = readFileSync("./content/second.txt" , 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt' , `Here is the result: ${first} , ${second}` , {flag: 'a'}); // the flag: a is used to appened to the file.

console.log(readFileSync('./content/result-sync.txt' , 'utf8'));
