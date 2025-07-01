const asyncHandler = require('../middleware/asyncHandler');
const Product = require('../models/productModel');
const Review = require('../models/reviewModel');

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


// @desc Create a product
// @route POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        user: req.user._id,
        name: "Sample Name",
        image: "/images/sample.jpg",
        description: "Sample description",
        brand: "Sample Brand",
        category: "Sample Category",
        price: 0,
        discount: 0,
        countInStock: 0,
        rating: 0, // required
        numReviews: 0,
        material: "Sample Material", // required
        brandDetails: {              // required nested object
            name: "Sample Brand Name",
            origin: "India",
            description: "Sample brand description"
        },
        colors: [],
        availableColors: [],
        sizes: [],
        availableSizes: [],
        features: []
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc Update a product
// @route PUT /api/products
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        image,
        description,
        brand,
        category,
        price,
        discount,
        countInStock,
        material,
        brandDetails,
        colors,
        availableColors,
        sizes,
        availableSizes,
        features } = req.body;

    const product = await Product.findById(req.body._id);

    if (product) {
        product.name = name || product.name;
        product.image = image || product.image;
        product.description = description || product.description;
        product.brand = brand || product.brand;
        product.category = category || product.category;
        product.price = price || product.price;
        product.discount = discount || product.discount;
        product.countInStock = countInStock || product.countInStock;
        product.material = material || product.material;
        product.brandDetails = brandDetails || product.brandDetails;
        product.colors = colors || product.colors;
        product.availableColors = availableColors || product.availableColors;
        product.sizes = sizes || product.sizes;
        product.availableSizes = availableSizes || product.availableSizes;
        product.features = features || product.features;

        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    }
    else {
        res.status(401)
        throw new Error("Product not found")
    }

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc Delete a product
// @route DELETE /api/products
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (product) {
        await Product.deleteOne({ _id: product._id });
        res.status(200).json({ message: "Product deleted!" })
    }
    else {
        console.log("Product not found!");
    }
})

// @desc Create product review
// @route POST /api/products/:id/review
// @access Private/Admin
const createProductReview = asyncHandler(async (req, res) => {


    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);
    console.log(product)
    if (product) {
        const alreadyReviewed = product?.reviews?.find(
            (review) => review.user.toString() === req.user._id.toString()
        );

        if (alreadyReviewed) {
            res.status(400);
            throw new Error("Product already reviewed!");
        }

        const review = new Review({
            name: req.user.username,
            user: req.user._id,
            rating: Number(rating) || 0,
            comment: comment,
        });

        const nwReview = await review.save();

        product.reviews?.push(nwReview._id);
        product.numReviews = product.reviews.length;

        const totalRating = product.reviews.reduce(
            (acc, r) => acc + Number(r?.rating || 0),
            0
        );
        product.rating =
            product.reviews.length > 0
                ? Math.round(totalRating / product.reviews.length)
                : 0;

        await product.save();
        res.status(201).json(product);
    } else {
        res.status(404);
        throw new Error("Product not found!");
    }
})

// @desc Get product reviews
// @route GET /api/products/:id/review
// @access Private/Admin
const getProductReviews = asyncHandler(async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (product && product.reviews) {
        res.status(200).json(product.reviews);
    }
    else {
        res.status(401);
        throw new Error("Reviews not found!");
    }
})

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews
};