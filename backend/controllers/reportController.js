const ReportModel = require('../models/reportModel');

class ReportController {
  static generateMonthlyReport(req, res) {
    try {
      const userId = req.user.id;
      const transactions = ReportModel.getUserTransactions(userId);

      const now = new Date();
      const startDate = new Date(now.getFullYear(), now.getMonth(), 1); // First day of the current month
      const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0); // Last day of the current month

      const report = ReportModel.calculateReport(transactions, startDate, endDate);
      res.status(200).json({ report, message: 'Monthly report generated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static generateYearlyReport(req, res) {
    try {
      const userId = req.user.id;
      const transactions = ReportModel.getUserTransactions(userId);

      const now = new Date();
      const startDate = new Date(now.getFullYear(), 0, 1); // First day of the current year
      const endDate = new Date(now.getFullYear(), 11, 31); // Last day of the current year

      const report = ReportModel.calculateReport(transactions, startDate, endDate);
      res.status(200).json({ report, message: 'Yearly report generated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = ReportController;
