const express = require('express');
const router = express.Router();


const WeightsController = require('../controllers/weights.controller');

// router.get('/', WeightsController.getAll);
router.get('/weights', WeightsController.getAll);
router.get('/weights/:id', WeightsController.getId);



// router.post('/weights', WeightsController.postNew);
// router.put('/weights/:id', WeightsController.putId);
// router.delete('/weights/:id', WeightsController.deleteId);

module.exports = router;
