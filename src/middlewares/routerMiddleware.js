const categoryRouter = require('../controllers/categoryController');



function routerMiddleware(app, req, res){
    app.use('/api/categories', categoryRouter);
}

module.exports = routerMiddleware;