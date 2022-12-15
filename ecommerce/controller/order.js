const Order = require("../model/Order")



const getOrders = async (req, res, next) => {
    let orders = await Order.find({ created_by: req.user._id })
    res.send(orders)
}

const store = async (req, res, next) => {

    try {

        // if (req.body.products?.length > 0) {
        let order = await Order.create({
            products: req.body.products,
            created_by: req.user._id
        })
        res.send(order)

        // } else {
        //     res.status(400).send({
        //         data: "product min 1 "
        //     })
        // }
    }
    catch (err) {
        next(err)
    }


}


module.exports = {
    getOrders,
    store
}