const MongooseRepository = require('../../core/dataAccess/mongooseRepository');
const OrderItem = require('../../entities/orderItem');

class OrderItemRepository extends MongooseRepository{
    constructor(){
        super(OrderItem);
    }

   
}

module.exports = OrderItemRepository;