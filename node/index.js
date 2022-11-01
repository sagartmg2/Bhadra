

const http = require('http');

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    // res.setHeader=('Content-Type','text/html');
    // res.end('<h1> This is the title </h1> <p> and this is the paragraph</p>');
    // console.log(req.url);
    // if(req.url == '/index'){
    // const data=fs.readFileSync('index.html')
    // res.end(data.toString())
    // }

    console.log("inside server");

    res.write("hello world")
    res.end()

    console.log(req.method)

})

/* 
    CRUD opertors
    Create   - POSt
    READ  - GET
    Update  - PUT / Patch
    DElete
*/

/* 
    HTTP methods
    GET
    POST
    PUT / Patch
    DELETE
*/



server.listen(port, () => { console.log(`Server is listening on the port on ${port}`) });