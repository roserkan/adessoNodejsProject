const router = require('express').Router();
const CategoryService = require('../business/services/categoryService');
const categoryService = new CategoryService();



router.get('/', async (req, res) => {
    const result = await categoryService.getAll();
    res.json(result);
});

router.get('/:id', async (req, res) => {
    const result = await categoryService.getById(req.params.id);
    res.json(result);
});

router.post('/', async (req, res, next) => {
    const result = await categoryService.add(req.body);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const result = await categoryService.delete(req.params.id);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const result = await categoryService.update(req.params.id, req.body);
    res.json(result);
});



module.exports = router;