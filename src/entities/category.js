const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        max: 50,
        unique: true,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    moneyPoint: {
        type: Schema.Types.ObjectId,
        ref: 'MoneyPoint'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
}, {collections: 'category', timestamps: true});


const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;