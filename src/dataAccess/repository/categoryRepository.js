const MongooseRepository = require('../../core/dataAccess/mongooseRepository');
const Category = require('../../entities/category');

class CategoryRepository extends MongooseRepository{
    constructor(){
        super(Category);
    }

   
}

module.exports = CategoryRepository;