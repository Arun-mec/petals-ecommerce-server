const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/userModel');
const Product = require('../models/productModel');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

// @desc Auth user and get token
// @route GET /api/users/login
// @access Private/Admin
const authUser = asyncHandler(async (req, res) => {
})