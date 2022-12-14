const express = require("express");
const Product = require("../model/Product");
const jwt = require("jsonwebtoken")

const multer = require('multer')
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)

        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({ storage: storage })

const router = express.Router();

router.get("/products", async (req, res, next) => {
    let products = await Product.find({})
    res.send(products)
})

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

router.post("/products", checkAuthentication, isSeller, upload.array('images', 12), async (req, res, next) => {

    console.log("body", req.body)
    console.log("body", req.files)
    // return;
    try {
        let images = req.files.map(file => file.filename)
        let product = await Product.create({ ...req.body, created_by: req.user._id, images })
        res.send(product)
    }
    catch (err) {
        next(err)
    }
})
router.put("/products/:id", checkAuthentication, isSeller, upload.array('images', 12), async (req, res, next) => {

    console.log("current-user-id", req.user._id)

    let db_product = await Product.findById(req.params.id)
    let seller_id = db_product.created_by

    console.log({ seller_id });
    if (req.user._id != seller_id) {
        return res.status(403).send({
            data: "Not valid seller.. "
        })

    }

    console.log(req.params);
    console.log("update");
    let product = await Product.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    res.send(product)
    return;
    console.log("body", req.body)
    console.log("body", req.files)


    // return;
    try {
        let images = req.files.map(file => file.filename)
        let product = await Product.create({ ...req.body, created_by: req.user._id, images })
        res.send(product)
    }
    catch (err) {
        next(err)
    }
})
router.delete("/products/:id", checkAuthentication, isSeller, async (req, res, next) => {

    try {

        console.log("current-user-id", req.user._id)

        let db_product = await Product.findById(req.params.id)
        let seller_id = db_product.created_by

        console.log({ seller_id });
        if (req.user._id != seller_id) {
            return res.status(403).send({
                data: "Not valid seller.. "
            })
        }

        let product = await Product.findByIdAndDelete(req.params.id)
        res.send({
            data: product
        })
    }
    catch (err) {
        next(err)
    }

})


module.exports = router;
