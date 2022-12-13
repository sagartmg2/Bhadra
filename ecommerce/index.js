const express = require("express")
const app = express()

const auth_route = require("./route/auth")

require('dotenv').config() // can read .env file
app.use(express.json())   // can read req body


app.use("/api", auth_route)

/* 
error handler 
 */
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

require("./config/database")
app.listen(process.env.PORT, () => {
    console.log("server started. ");
})