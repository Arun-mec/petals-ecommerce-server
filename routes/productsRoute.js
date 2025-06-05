const express = require("express");
// const products = require('../data/products');
const asyncHandler = require("../middleware/asyncHandler");
const { getAllProducts, getProductById } = require("../controller/productsController");

const router = express.Router();

// @desc Fetch all products
router.route('/',).get(getAllProducts);

// @desc Fetch a product
router.route('/:id').get(getProductById)

// Add a product
router.post('/', asyncHandler(async (req, res) => {
    res.send("User Router - post");
}))

module.exports = router;