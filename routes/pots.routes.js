const express = require('express');
const router = express.Router();


const PotsController = require('../controllers/pots.controller');

// router.get('/', PotsController.getAll);
router.get('/pots', PotsController.getAll);
router.get('/pots/:id', PotsController.getId);



// router.post('/pots', PotsController.postNew);
router.put('/pots/:id', PotsController.putId);
// router.delete('/pots/:id', PotsController.deleteId);

module.exports = router;
