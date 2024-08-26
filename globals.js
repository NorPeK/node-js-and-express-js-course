// GlOBALS - in node.js we don't have windows
// we can access globals everywhere in the application
// example for globals:
// __dirname - path to current directory
// __filename - filename
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
    console.log("Hello");
}, 1000);