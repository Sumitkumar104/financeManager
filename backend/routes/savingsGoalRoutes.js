const express = require('express');
const SavingsGoalController = require('../controllers/savingsGoalController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', SavingsGoalController.create);
router.get('/', SavingsGoalController.getAll);
router.put('/:id', SavingsGoalController.update);
router.delete('/:id', SavingsGoalController.delete);

module.exports = router;
