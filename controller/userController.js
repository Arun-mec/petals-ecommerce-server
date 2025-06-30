const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

// @desc Auth user and get token
// @route GET /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    const user = await User.findOne({ email })
    console.log(user);

    if (user && (await user.matchPassword(password))) {

        generateToken(res, user._id);

        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            isActive: user.isActive
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid email or password!")
    }
})

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {

    const { username, email, password, number } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists!");
    }

    const user = await User.create({
        email,
        username,
        password,
        number
    })

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            isActive: user.isActive,
            number: user.number
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid user data!")
    }
})

// @desc Logout user & clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expiresIn: new Date(0)
    })

    res.status(200).json({
        message: "Loggedout user succesfully"
    })
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");

    if (user) {
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            isActive: user.isActive,
            number: user.number
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid user data!")
    }
})

// @desc Update user profile using token
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id).select("-password");

    if (user) {

        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        user.number = req.body.number || user.number;

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            isActive: updatedUser.isActive,
            number: updatedUser.number
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid user data!")
    }
})

// @desc delete user profile using token
// @route DELETE /api/users/profile
// @access Private
const deleteUserProfile = asyncHandler(async (req, res) => {
    res.send("Delete user profile")
})

// @desc Reset user password
// @route PUT /api/users/password
// @access Private
const resetUserPassword = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id);
    const { password, nwpassword } = req.body;

    if (user && await user.matchPassword(password) && (nwpassword !== password)) {

        user.password = nwpassword;

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            isActive: updatedUser.isActive,
            number: updateUser.number
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid user data!")
    }
})

// @desc Forgot password
// @route PUT /api/users/verifyemail
// @access Public
const verifyEmail = asyncHandler(async (req, res) => {

    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {

        user.password = nwpassword;

        const updatedUser = await user.save();

        res.status(200).json({
            isVerified: true
        })
    }
    else {
        res.status(200).json({
            isVerified: true,
            message: "User doesn't exists! Please recheck the email"
        })

    }
})

// @desc Forgot password
// @route PUT /api/users/forgotpassword
// @access Private
const forgotPassword = asyncHandler(async (req, res) => {
    const { email, nwpassword } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {

        user.password = nwpassword;

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            isActive: updatedUser.isActive,
            number: updateUser.number
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid user data!")
    }
})

// @desc Reset user password
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}).select("-password");
    if (users) {
        res.json(users);
    }
    else {
        res.status(401);
        throw new Error("Users not found!");
    }
})

// @desc Get user by id
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (user) {
        res.json(user);
    }
    else {
        res.status(401);
        throw new Error("User is not found!");
    }
})

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (user) {
        if (user.isAdmin) {
            res.status(401)
            throw new Error("Admin user can't be deleted!");
        }
        else {
            await User.deleteOne(user);
            res.status(200).json({ message: "User deleted successfully!" });
        }
    }
    else {
        res.status(401);
        throw new Error("User not found!");
    }

})

// @desc Update user by admin
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    const { id : userId, username, email, number, isAdmin} = req.body;

    const user = await User.findById(userId).select("-password");

    if (user) {
        user.username = username || user.username;
        user.email = email || user.email;
        user.number = number || user.number;
        if (typeof isAdmin !== "undefined") user.isAdmin = isAdmin;

        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    }
    else {
        res.status(401).send({message:"User not found!"})
    }
    
})


module.exports = {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    resetUserPassword,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    deleteUserProfile,
    verifyEmail,
    forgotPassword
};