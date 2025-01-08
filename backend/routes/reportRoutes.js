const express = require('express');
const ReportController = require('../controllers/reportController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/monthly', ReportController.generateMonthlyReport);
router.get('/yearly', ReportController.generateYearlyReport);

module.exports = router;
