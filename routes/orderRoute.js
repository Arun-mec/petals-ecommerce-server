const express = require("express");

const router = express.Router();

const {
    addOrderItems,
    getAllOrders,
    getOrderById,
    getUserOrders,
    updateOrderToDelivered,
    updateOrderToPaid
} = require("../controller/orderController");

const { protect, admin } = require("../middleware/authMiddleware");

// @desc Add Order items and get all orders
router.route('/').post(protect, addOrderItems).get(protect, admin, getAllOrders);

// @desc Get user orders
router.route('/myorders').get(protect, getUserOrders);

// @desc Get order by Id
router.route('/:id').get(protect, getOrderById);

// @desc Update order to delivered
router.route('/:id/deliver').put(protect, updateOrderToDelivered)

// @desc Update order to paid
router.route('/:id/payment').put(protect, updateOrderToPaid)

module.exports = router;