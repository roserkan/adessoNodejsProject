const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRoleSchema = new Schema({
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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }
}, {collections: 'userRole', timestamps: true});


const UserRole = mongoose.model('UserRole', UserRoleSchema);
module.exports = UserRole;