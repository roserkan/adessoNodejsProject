const MongooseRepository = require('../../core/dataAccess/mongooseRepository');
const Order = require('../../entities/order');

class OrderRepository extends MongooseRepository{
    constructor(){
        super(Order);
    }

   
}

module.exports = OrderRepository;