const express = require("express");
const Product = require("../model/Product");
const jwt = require("jsonwebtoken")

const multer = require('multer')
const path = require("path")
const { isSeller, checkAuthentication } = require("../middleware/auth")

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
    // console.log(req.query);
    // return;
    // let products = await Product.find({
    //     name: RegExp(`${req.query.search_term}`, "i")
    // })

    /* 
        aggregation  - advance find method 
    */

    let products = await Product.aggregate([
        {
            $match: {
                name: RegExp(`${req.query.search_term}`, "i")
            }
        }
    ])

    res.send(products)
})



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
