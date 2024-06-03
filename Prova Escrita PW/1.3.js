const Products = require('../data/entities/products'); // Caminho fictício para o modelo

exports.getAll = async (req, res) => {
    try {
        const products = await Products.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
};

exports.getById = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving the product' });
    }
};

exports.create = async (req, res) => {
    try {
        const newProduct = await Products.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating the product' });
    }
};

exports.update = async (req, res) => {
    try {
        const updatedProduct = await Products.update(req.params.id, req.body);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating the product' });
    }
};

exports.delete = async (req, res) => {
    try {
        await Products.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting the product' });
    }
};
