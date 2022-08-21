const MongooseRepository = require('../../core/dataAccess/mongooseRepository');
const MoneyPoint = require('../../entities/moneyPoint');

class MoneyPointRepository extends MongooseRepository{
    constructor(){
        super(MoneyPoint);
    }

   
}

module.exports = MoneyPointRepository;