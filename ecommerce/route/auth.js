const expreess = require("express");
const User = require("../model/User");
const router = expreess.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

router.post("/login", (req, res, next) => {
    res.send("login")
})

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

    },
    async (req, res, next) => {
        console.log(req.body);

        // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        //     // Store hash in your password DB.
        // });
        let hashed_password = "";

        if (req.body.password) {

            /* 
                one way encryption 

                password => $2b$10$svXs55m6e1lxUT7otwxcKONpl0a93y/k5omI1G70Py1QcNTQ1B8j
                $2b$10$svXs55m6e1lxUT7otwxcKONpl0a93y/k5omI1G70Py1QcNTQ1B8j => cannot be covnerted to plain password 

             */
            
            hashed_password = await bcrypt.hash(req.body.password, 10);
        }


        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
                password: hashed_password,
                // adsf4123qadfadsqewradscf
            })
            res.send("singup")
        } catch (err) {
            next(err)
        }
    })

module.exports = router