const productsRouter = require('express').Router();
const controller = require('../controllers/products');
const authMiddleware = require('../middlewares/auth');


productsRouter.get('/', authMiddleware, controller.getAll);


productsRouter.get('/:id', authMiddleware, controller.getById);


productsRouter.post('/', authMiddleware, controller.create);


productsRouter.put('/:id', authMiddleware, controller.update);


productsRouter.delete('/:id', authMiddleware, controller.delete);

module.exports = productsRouter;
