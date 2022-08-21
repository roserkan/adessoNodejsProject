const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        max: 150,
        unique: true,
        required: true
    },
    price: {
        type: Number,
    },
    stock: {
        type: Number,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    //orderItems?
}, {collections: 'product', timestamps: true});


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;