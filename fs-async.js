const {readFile, writeFile} = require("fs"); // same as const fs = require ("fs"); fs.readFileSync();
// first we need to destructure the map

readFile('./content/first.txt' , 'utf8', (err, result)=> {
    if(err) {
        console.log(err);
        return;
    }
    //console.log(result);
    const first = result;
    readFile('./content/second.txt' , 'utf8' , (err ,result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt' , `Here is the result: ${first} , ${second}` , (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result);
            
        })
    })
});

/* 
THIS IS THE SAME USING PROMISES
const { readFile, writeFile } = require("fs").promises;

const readFilePromise = (path) => {
    return readFile(path, 'utf8');
};

const writeFilePromise = (path, content) => {
    return writeFile(path, content);
};

readFilePromise('./content/first.txt')
    .then((firstResult) => {
        const first = firstResult;
        return readFilePromise('./content/second.txt')
            .then((secondResult) => {
                const second = secondResult;
                return writeFilePromise('./content/result-async.txt', `Here is the result: ${first}, ${second}`);
            });
    })
    .then(() => {
        console.log('File written successfully');
    })
    .catch((err) => {
        console.error('An error occurred:', err);
    });
 */


/*     
THIS IS THE SAME WITH ASYNC/AWAIT SYNTAX
const { readFile, writeFile } = require("fs").promises;

async function processFiles() {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`);
        console.log('File written successfully');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

processFiles();
 */