

// import  express from "expres" // es6 module system
const express = require("express") // common js  module
const { body, validationResult } = require('express-validator');
// const path = require("path")
// const fs = require("fs")
const mongoose = require('mongoose');
const Product = require("./model/Product")
const app = express();
app.use(express.json());  // gloal middleware. 

mongoose.set('strictQuery', false);


/* 

    middleware
        - functions in route 
        - which has access / modification-aceess  to request and response
    
     - global middleware
     - local middleware
     - third party middleware. 

    -next  in middlware. 
        - next function calls the next valid route in line

*/
// app.use(middleware)  
// app.use((req, res, next) => {
//     console.log("firstmiddleware.");
//     // res.send("inside middleware.")
//     next();
// })

// // app.use(middleware)  
// app.use((req, res, next) => {
//     console.log("second middleware.");
//     next();
// })



// app.use(auth_middleware) // global middleware
const { auth_middleware } = require("./middleware/auth")

app.get("/", (req, res) => {
    res.send("welcome to expreess")
})

app.get("/api/products", async (req, res, next) => {
    let products = await Product.find()
    res.send({
        data: products
    })
})

app.delete("/api/products/:id", async (req, res, next) => {
    /* 
        db.products.updateOne({_id:123},{$set:{req.body}})
    */
    // let product = await Product.findByIdAndUpdate(req.params.id, { ...req.body }, {
    //     new: true
    // })
    let product = await Product.findByIdAndDelete(req.params.id)
    res.send({
        data: product
    })
})

app.post("/api/products",
    body('price').isNumeric().withMessage("must be numeric"),
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            next()
        }

    },
    async (req, res, next) => {
        console.log("body", req.body);

        /* 
        db.products.inserOne
            DBProduct.createOne({name: req.body.name})
        */
        try {
            await Product.create({
                name: req.body.name,
                price: req.body.price,
            })

            console.log("product_created..")

            res.send("product created.")
        }
        catch (err) {
            // console.log(err.message);
            next(err)
        }

        // res.send([{ id: "prodouct 1" }, {}])
    })

app.get("/api/orders", auth_middleware, (req, res) => {
    console.log(req.query);
    console.log(req.user);
    res.send([{ id: "list of orders..." }, {}])
})

app.get("/api/students", (req, res) => {

    let students = [] // fetch from database. 

    res.send([])
})


mongoose.connect('mongodb://localhost:27017/hospital')
    .then(() => console.log('Connected!'))
    .catch(err => {
        console.log(err);
    })


app.use((err, req, res, next) => {

    let status_code = 500;
    let msg = "Server Error"
    let errors = [];


    if (err.name == "ValidationError") {
        status_code = 400;
        msg = "Bad request"
        Object.entries(err.errors).map(error => {
            errors.push({
                param: error[0],
                msg: error[1].message
            })
        })
    }

    res.status(status_code).send({
        msg: msg,
        errors
    })
})

app.listen(8000, (data) => {
    console.log("lilstenin server....");
})

