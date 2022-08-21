const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    quantity : {
        type: Number
    }
}, {collections: 'orderItem', timestamps: true});


const OrderItem = mongoose.model('OrderItem', OrderItemSchema);
module.exports = OrderItem;