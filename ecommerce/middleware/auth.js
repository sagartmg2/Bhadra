
const { body } = require('express-validator');

const expressValidate = require("./expressValidate")
const jwt = require("jsonwebtoken")

const login_middeware = expressValidate([
    body('email').notEmpty().withMessage("required field"),
    body('password').notEmpty().withMessage("required field")])

const signup_middeware = expressValidate([

    body('name').notEmpty().withMessage("required field"),
    body('email').notEmpty().withMessage("required field"),
    body('role').notEmpty().withMessage("required field"),
    body('password').notEmpty().withMessage("required field")
])

const checkAuthentication = async (req, res, next) => {
    let logged = false;

    let token = req.headers.authorization?.split(" ")[1] || null
    // let token = req.headers.authorization
    /* 
        VERIFY THE TOKEN FROM REQUEST. 
    */
    if (token) {
        try {
            let decoded = await jwt.verify(token, 'shhhhh');

            req.user = decoded
            if (decoded) {
                return next();
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    res.status(401).send({
        data: "not looged in. "
    })
}

const isSeller = (req, res, next) => {
    if (req.user.role == "seller") {
        return next()
    }
    else {
        return res.status(403).send({
            data: "Access denied"
        })
    }
}
const isBuyer = (req, res, next) => {
    if (req.user.role == "buyer") {
        return next()
    }
    else {
        return res.status(403).send({
            data: "Access denied"
        })
    }
}



module.exports = {
    login_middeware,
    signup_middeware,
    checkAuthentication,
    isSeller,
    isBuyer
}