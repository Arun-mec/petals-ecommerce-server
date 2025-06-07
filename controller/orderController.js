const asyncHandler = require('../middleware/asyncHandler');
const Order = require('../models/orderModel');
const jwt = require('jsonwebtoken');

// @desc Create order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        itemPrice,
        taxPrice,
        totalPrice,
        shippingPrice,
        shippingAddress,
        paymentMethod
    } = req.body;

    if (orderItems && orderItems.length == 0) {
        res.status(400);
        throw new Error("No order items!");
    } else {
        const order = new Order({
            orderItems: orderItems.map((item) => ({
                ...item,
                product: item._id,
                _id: undefined,
            })),
            user: req.user._id,
            itemPrice : Number(itemPrice),
            taxPrice : Number(taxPrice),
            totalPrice :Number(totalPrice),
            shippingPrice : Number(shippingPrice),
            shippingAddress,    
            paymentMethod,
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
});

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private
const getUserOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(201).json({ ...orders });
});

// @desc Update an order to pay
// @route PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentStatus = {
            _id : req.body?.id,
            status : req.body?.status || true,
            updateTime : req.body?.updateTime,
            emailAddress : req.body?.emailAddress
        };

        const updatedOrder = await order.save();
        res.status(200).json(updatedOrder)
    }
    else {
        res.status(400);
        throw new Error("Order not found!");
    }
});

// @desc Get order by Id
// @route GET /api/orders/:id
// @access Private/Admin
const getOrderById = asyncHandler(async (req, res) => {
    const orderId = req.params.id;
    const order = await Order.findById(orderId).populate('user', "name email");

    if (order) {
        res.status(201).json(order);
    }
    else {
        res.status(404);
    }
});

// @desc Update an order to delivered
// @route POST /api/orders/:id/delivered
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send("Order update to delivered");
});

// @desc Get lall orders
// @route GET /api/orders
// @access Private/Admin
const getAllOrders = asyncHandler(async (req, res) => {
    res.send("Get all orders!");
});

module.exports = {
    getAllOrders,
    addOrderItems,
    getUserOrders,
    getOrderById,
    updateOrderToDelivered,
    updateOrderToPaid
}