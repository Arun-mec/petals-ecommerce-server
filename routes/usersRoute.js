const express = require("express");

const router = express.Router();

const { authUser,
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
    forgotPassword,
    verifyEmail} = require('../controller/userController');
const { protect, admin } = require("../middleware/authMiddleware");

// @desc Get all users and register user
router.route('/').get(protect, admin, getUsers).post(registerUser);

// @desc Authenticate/Login user
router.route('/auth').post(authUser);

// @desc Logout user
router.route('/logout').post(protect, logoutUser);

// @desc Need to update the password, even if the user is authenticated
router.route('/password').put(protect, resetUserPassword);

// @desc Getting user, updating user and deleting user is applicable only for loggedin users
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile).delete(protect, deleteUserProfile);

// @desc For modifying the user details, for admin  users
router.route('/:id').get(protect, admin, getUserById).put(protect, admin, updateUser).delete(protect, admin, deleteUser);

// @desc update password
router.route('/forgotpassword').post(forgotPassword);

// @desc for verifing the email
router.route('/verifyemail').post(verifyEmail);

module.exports = router;