const http = require('http');
// req is request and res is response
const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.end('Welcome to our home page.')
    }
    else if(req.url === '/about') {
        res.end('Welcome to our about page.')
    } else {
    //res.write('Welcome to our home page.');
    //res.end();
    res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for </p>
        <a href="/">back home</a>
        `)
    }

});

server.listen(5000); 