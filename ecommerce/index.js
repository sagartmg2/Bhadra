const express = require("express")
const Product = require("./model/Product")
const app = express()

const auth_route = require("./route/auth")
const product_route = require("./route/product")

require('dotenv').config() // can read .env file
app.use(express.json())   // can read req body

app.use(express.static('uploads'))

app.use("/api", auth_route)
app.use("/api", product_route)

/* 
error handler 
 */
app.use((err, req, res, next) => {

    let status_code = 500;
    let msg = "Server Error"
    let errors = [];

    console.log(err.name)
    // console.log(err.message)
    console.log("code", err.code)
    // console.log(err)


    if (err.name == "ValidationError") {
        status_code = 400;
        msg = "Bad request"

        Object.entries(err.errors).map(error => {
            errors.push({
                param: error[0],
                msg: error[1].message
            })
        })
    } else {
        if (err.code == 11000) {
            status_code = 400;
            msg = "Bad request"
            errors.push({
                param: "email",
                msg: "Duplicate email "
            })
        }
    }

    res.status(status_code).send({
        msg: msg,
        errors,
        erro: err.message
    })
})

// Product.

require("./config/database")
app.listen(process.env.PORT, () => {
    console.log("server started. ");
})