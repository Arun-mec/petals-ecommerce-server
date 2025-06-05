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

router.route('/').get(protect, admin, getUsers).post(registerUser);

router.route('/auth').post(authUser);

router.route('/logout').post(protect, logoutUser);

// Need to update the password, even if the user is authenticated
router.route('/password').put(protect, resetUserPassword);

// Getting user, updating user and deleting user is applicable only for loggedin users
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile).delete(protect, deleteUserProfile);

// For modifying the user details, user needs to be admin
router.route('/:id').get(protect, admin, getUserById).put(protect, admin, updateUser).delete(protect, admin, deleteUser);

router.route('/forgotpassword').post(forgotPassword);
router.route('/verifyemail').post(verifyEmail);

module.exports = router;