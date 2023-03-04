const express = require('express');
const { findAllOrders, postOrder } = require('../controllers/order.controller');
const orderRouter = express.Router();

orderRouter.get('/', findAllOrders);
orderRouter.post('/', postOrder);


module.exports = orderRouter; 