const asyncHandler = require('../middleware/asyncHandler');
const Product = require('../models/productModel');

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});

    if (products) {
        res.json(products);
    }
    else {
        res.status(404);
        throw new Error("Resource not found")
    }
})

// @desc Fetch a product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId)

    if (product) {
        res.json(product);
    }
    else {
        res.status(404);
    }
});


module.exports = { getAllProducts, getProductById };