const MongooseRepository = require('../../core/dataAccess/mongooseRepository');
const User = require('../../entities/user');

class UserRepository extends MongooseRepository{
    constructor(){
        super(User);
    }

   
}

module.exports = UserRepository;