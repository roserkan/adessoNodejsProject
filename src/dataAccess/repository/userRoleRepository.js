const MongooseRepository = require('../../core/dataAccess/mongooseRepository');
const UserRole = require('../../entities/userRole');

class UserRoleRepository extends MongooseRepository{
    constructor(){
        super(UserRole);
    }

   
}

module.exports = UserRoleRepository;