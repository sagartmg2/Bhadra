
const express = require("express") // modules  // third party moduel // common js module system
var cors = require('cors')
const app = express();

app.use(cors()) // global middleware, handle for every incomming request.s 



const auth_middleware = (req, res, next) => {
    console.log("auth middleware ");
    /* 
        middleware 
            - function whcih has access to request,  response, 
    */
    let logged_in = true;
    if (logged_in) {
        next();  // a function which call the next valid middleware. 
    } else {
        res.status(401).send("unauthenticated user. ")
    }
}

// app.use(auth_middleware) // global middlware. 

app.get('/products', function (req, res) {
    res.send([
        {
            id:1,
            name:"One"
        },
        {
            id:2,
            name:"Two"
        }
    ])
})

app.get('/', auth_middleware, function (req, res) {
    res.send('Hello World')
})

app.listen(8000, () => {
    console.log("listening... ");
})

