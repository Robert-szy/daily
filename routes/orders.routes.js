const express = require('express');
const router = express.Router();


const OrdersController = require('../controllers/orders.controller');

// router.get('/', ordersController.getAll);
router.get('/orders', OrdersController.getAll);
router.get('/orders/:id', OrdersController.getId);




// router.post('/orders', OrdersController.postNew);
// router.put('/orders/:id', OrdersController.putId);
// router.delete('/orders/:id', OrdersController.deleteId);

module.exports = router;
