const express = require('express');
const router = express.Router();


const CategoriesController = require('../controllers/categories.controller');

// router.get('/', CategoriesController.getAll);
router.get('/categories', CategoriesController.getAll);
router.get('/categories/:id', CategoriesController.getId);



// router.post('/categories', CategoriesController.postNew);
// router.put('/categories/:id', CategoriesController.putId);
// router.delete('/categories/:id', CategoriesController.deleteId);

module.exports = router;
