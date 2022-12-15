
const User = require("../model/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const login = async (req, res, next) => {


    /* 
        get password and mail from req
        check if user with sent email exits 
            if exists
                check if the password match
                    if match 
                        send token 
    */


    try {
        let user = await User.findOne({ email: req.body.email })
        console.log(user);

        if (user) {

            let user_pass_obj = await User.findOne({ email: req.body.email }).select("password")

            let match_status = await bcrypt.compare(req.body.password, user_pass_obj.password);
            console.log({ match_status })
            if (match_status) {
                let token = jwt.sign(user.toObject(), 'shhhhh');
                return res.send({
                    token: token
                })
            }
        }

        return res.status(401).send({
            msg: "Invalid Credentials"
        })
    } catch (err) {
        next(err)
    }
}

const signup = async (req, res, next) => {

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
        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            password: hashed_password,
            // adsf4123qadfadsqewradscf
        })

        user = user.toObject();

        delete user.password
        console.log({ user })

        res.send(user)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    login,
    signup
}