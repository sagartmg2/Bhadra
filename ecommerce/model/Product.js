const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
        default: 0,
    },
    in_stock: {
        type: Number,
        min: 0,
        default: 0,
    },
    description: {
        type: String,
        maxLength: 255,
    },
    categories: [String],
    brands: {
        type: [String],
    },
    /* reference document  */
    created_by: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    /* 
    embedded document 
    created_by: {
        _id: {
            type: ObjectId
        },
        name: String,
        email: String,
    },
    */
    images: {
        type: [String]
    }
});

module.exports = mongoose.model("Product", ProductSchema)


/* 
    product1 = {
        name,
        price,
        created_by: {
                name: seler,
                email seller@seller.com,
                role: seller, 
                phone,
                addres
                website 
        }
    }
    product2 = {
        name,
        price,
        created_by: {
                name: seler,
                email seller@seller.com,
                role: seller, 
                phone,
                addres
                website 
        }
    }
    product3 = {
        name,
        price,
        created_by: {
                name: seler,
                email seller@seller.com,
                role: seller, 
                phone,
                addres
                website 
        }
    }

    db.products.updateMany({created_by.email: },{$set:${phone:12123}})


*/