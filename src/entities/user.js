const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    emailAddress: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    userRoles: [{
        type: Schema.Types.ObjectId,
        ref: 'UserRole'
    }]
}, {collections: 'user', timestamps: true});


const User = mongoose.model('User', UserSchema);
module.exports = User;