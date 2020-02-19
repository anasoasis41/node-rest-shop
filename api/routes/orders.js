const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const OrderController = require('../controllers/orderController');

// Get all Orders
router.get("/", checkAuth, OrderController.orders_get_all);

// Add Order
router.post('/', checkAuth, OrderController.orders_create_order);

// Get order
router.get('/:orderId', checkAuth, OrderController.orders_get_order);

// Delete order
router.delete("/:orderId", checkAuth, OrderController.orders_delete_order)

module.exports = router;