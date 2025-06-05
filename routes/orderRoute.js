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

router.route('/').post(protect, addOrderItems).get(protect, admin, getAllOrders)
router.route('/myorders').get(protect, getUserOrders);
router.route('/:id').get(protect, admin, getOrderById);
router.route('/:id/delivered').put(protect, updateOrderToDelivered)
router.route('/:id/payment').put(protect, admin, updateOrderToPaid)

module.exports = router;