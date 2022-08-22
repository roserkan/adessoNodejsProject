const CategoryRepository = require('../../dataAccess/repository/categoryRepository');
const { successResult, errorResult } = require('../../core/results/results');
const ValidationTool = require('../../core/crossCuttingConcerns/validation/validationTool');
const schema = require('../../business/validationRules/categoryValidation');
const BusinessRules = require('../../core/business/businessRules');
const { categoryMessages } = require('../constants/messages');

class CategoryService {
    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    async getAll() {
        const result = await this.categoryRepository.getAll();
        return successResult(result);
    }

    async getById(id) {
        const result = await this.categoryRepository.getById(id);
        if(result)
            return successResult(result);
        return errorResult(categoryMessages.categoryNotFound);
        
    }

    async add(object) {
        const err = BusinessRules(this.isValidated(object, schema), await this.isCategoryNameUnique(object))
        if (err != null) return err

        const result = await this.categoryRepository.add(object);
        return successResult(result);
    }

    async delete(id) {
        const item = await this.categoryRepository.getById(id);
        if(item){
            item.isDeleted = true;
            const result = await this.categoryRepository.update(id, item);
            return successResult(result);
        }
        return errorResult(categoryMessages.categoryNotFound);
    }

    async update(id, object) {
        delete object.createdAt;
        delete object.updatedAt;

        

        const err = BusinessRules(
                        await this.idControl(id, categoryMessages.categoryNotFound),
                        this.isValidated(object, schema), 
                        await this.isCategoryNameUnique(object, id)
                    )
        if (err != null) return err

        const result = await this.categoryRepository.update(id, object);
        return successResult(result);
    }


    
    isValidated(entity, schema) {
        const result = ValidationTool(entity, schema)
        if (result) return errorResult(result)
        return true
    }

    async isCategoryNameUnique(entity) {
        const items = await this.categoryRepository.getAll();
        const result = items.filter(item => item.name === entity.name);
        
        if (result.length != 0) return errorResult(categoryMessages.categoryNameAlreadyExist)
        return true
    }

    async idControl(id, message){
        const result = await this.categoryRepository.getById(id);
        if(!result) return errorResult(message);
        return true;
    }

}

module.exports = CategoryService;