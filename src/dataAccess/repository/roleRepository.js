const MongooseRepository = require('../../core/dataAccess/mongooseRepository');
const Role = require('../../entities/role');

class RoleRepository extends MongooseRepository{
    constructor(){
        super(Role);
    }

   
}

module.exports = RoleRepository;