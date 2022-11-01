

const http = require('http');

const port = process.env.PORT || 8000;

const fs = require("fs")

// path

const server = http.createServer((req, res) => {
    // res.setHeader=('Content-Type','text/html');
    // res.end('<h1> This is the title </h1> <p> and this is the paragraph</p>');
    // console.log(req.url);
    // if(req.url == '/index'){
    // const data=fs.readFileSync('index.html')
    // res.end(data.toString())
    // }

    console.log("inside server");

    if (req.url == "/products") {

        if (req.method == "GET") {
            let data = fs.readFileSync("./products.json")
            res.write(JSON.stringify(JSON.parse(data)))
            res.end();
        }

        if (req.method == "POST") {
            console.log("post..")

            req.on("data", (chunk) => {
                let req_data = JSON.parse(chunk)

                let products = JSON.parse(fs.readFileSync("./products.json"))
                products.push(req_data.title);
                fs.writeFileSync("products.json", JSON.stringify(products))
            })


            res.write("success");
        }

        if (req.method == "PUT") {
            req.on("data", (chunk) => {
                let req_data = JSON.parse(chunk)
                if (!req_data.id) {
                    res.statusCode = 400
                    res.write(JSON.stringify({ err: "id is reuired" }))
                    res.end()

                } else {
                    let products = JSON.parse(fs.readFileSync("./products.json"))
                    products = products.map(product => {
                        if (product.id == req_data.id) {
                            return {
                                id: product.id,
                                title: req_data.title
                            }
                        }
                        return product
                    })
                    fs.writeFileSync("products.json", JSON.stringify(products))
                    res.write("success");
                    res.end();

                }

            })
        }
    }

    // [{}]
    // res.writeHead()
    // [atj]
    // res.statusCode = 404
    // res.write("404")

    /* 
        2 -  success 
            200 
            201
            204

        3 -  redirect / warning
        4 - client side error
            400 - bad request 
            401 - unauthenticated
            403 - unauhtorized / forbidden
            404 - resource not found
        5 - server error
         500 
    */


    // db.insert()

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