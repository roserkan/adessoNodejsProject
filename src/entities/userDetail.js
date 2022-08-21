const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDetailSchema = new Schema({
    firstName: {
        type: String,
        max: 50,
        required: true
    },
    lastName: {
        type: String,
        max: 50,
        required: true
    },
    address: {
        type: String,
        max: 300,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {collections: 'userDetail', timestamps: true});


const UserDetail = mongoose.model('UserDetail', UserDetailSchema);
module.exports = UserDetail;