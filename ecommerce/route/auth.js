const expreess = require("express");
const router = expreess.Router();
const { body, validationResult } = require('express-validator');

const { login, signup } = require("../controller/auth")
const {login_middeware} = require("../middleware/auth")

router.post("/login", login_middeware, login)

router.post("/signup",
    body('name').notEmpty().withMessage("required field"),
    body('email').notEmpty().withMessage("required field"),
    body('role').notEmpty().withMessage("required field"),
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();

    }, signup)

module.exports = router