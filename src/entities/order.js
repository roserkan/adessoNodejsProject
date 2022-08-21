const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems: [{
        type: Schema.Types.ObjectId,
        ref: 'OrderItem'
    }],
    total: {
        type: Number,
    },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {collections: 'order', timestamps: true});


const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;