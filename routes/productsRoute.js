const express = require("express");
// const products = require('../data/products');
const asyncHandler = require("../middleware/asyncHandler");
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductReviews, createProductReview } = require("../controller/productsController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @desc Fetch all products, Add Product and Update product
router.route('/',).get(getAllProducts).post(protect, admin, createProduct).put(protect, admin, updateProduct);

// @desc Fetch a product and Delete product 
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

router.route('/:id/review').get(protect, getProductReviews).post(protect, createProductReview);

module.exports = router;