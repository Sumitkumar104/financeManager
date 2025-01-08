const express = require('express');
const CategoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', CategoryController.create);
router.get('/', CategoryController.getAll);
router.delete('/:id', CategoryController.delete);

module.exports = router;
