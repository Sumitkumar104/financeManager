const express = require('express');
const TransactionController = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', TransactionController.create);
router.get('/', TransactionController.getAll);
router.put('/:id', TransactionController.update);
router.delete('/:id', TransactionController.delete);

module.exports = router;
