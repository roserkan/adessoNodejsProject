const MongooseRepository = require('../../core/dataAccess/mongooseRepository');
const Product = require('../../entities/product');

class ProductRepository extends MongooseRepository{
    constructor(){
        super(Product);
    }

   
}

module.exports = ProductRepository;