const express = require('express');
const router = express.Router();


const MultipliersController = require('../controllers/multipliers.controller');

// router.get('/', MultiplierController.getAll);
router.get('/multipliers', MultipliersController.getAll);
router.get('/multipliers/:id', MultipliersController.getId);



// router.post('/multiplier', MultiplierController.postNew);
// router.put('/multiplier/:id', MultiplierController.putId);
// router.delete('/multiplier/:id', MultiplierController.deleteId);

module.exports = router;
