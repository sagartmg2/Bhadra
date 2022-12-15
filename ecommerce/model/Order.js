


// product = [
//     {
//         product_id,
//         quantity
//     }
// ]
// crated_by: user_id;

const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
    products: {
        type: [{
            product_id: {
                required: true,
                type: ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                min: 1,
                required: true,
            },
            status: {
                type: String,
                enum: ["pending", "rejected", "shipped"],
                default: "pending"

            }
        }],
        validate: {
            validator: function (values) {
                if ((values.length == 0)) {
                    return false;
                }
            },
            message: `atleast one product is required. `
        },

    },
    created_by: {
        type: ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Order", OrderSchema)
