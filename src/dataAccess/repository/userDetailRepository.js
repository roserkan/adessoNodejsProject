const MongooseRepository = require('../../core/dataAccess/mongooseRepository');
const UserDetail = require('../../entities/userDetail');

class UserDetailRepository extends MongooseRepository{
    constructor(){
        super(UserDetail);
    }

   
}

module.exports = UserDetailRepository;