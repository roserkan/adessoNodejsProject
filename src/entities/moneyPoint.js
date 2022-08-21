const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoneyPointSchema = new Schema({
    point: {
        type: String,
        max: 50,
        unique: true,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {collections: 'moneyPoint', timestamps: true});


const MoneyPoint = mongoose.model('MoneyPoint', MoneyPointSchema);
module.exports = MoneyPoint;