const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true  // mongoose schema validation, database validation 
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    role: {
        required: true,
        type: String,
        enum: ["seller", "buyer"]
    }

});

module.exports = mongoose.model("User", UserSchema)