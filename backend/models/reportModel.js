const db = require('../utils/db');

class ReportModel {
  static getUserTransactions(userId) {
    return db.transactions.filter(transaction => transaction.userId === userId);
  }

  static calculateReport(transactions, startDate, endDate) {
    const filteredTransactions = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= startDate && transactionDate <= endDate;
    });

    const report = {
      income: 0,
      expenses: 0,
      categories: {},
    };

    filteredTransactions.forEach(transaction => {
      const { amount, category, type } = transaction; // Assuming type is 'income' or 'expense'
      if (type === 'income') {
        report.income += amount;
      } else if (type === 'expense') {
        report.expenses += amount;
        report.categories[category] = (report.categories[category] || 0) + amount;
      }
    });

    // Calculate percentages
    const totalExpenses = report.expenses;
    report.categories = Object.entries(report.categories).map(([category, amount]) => ({
      category,
      percentage: ((amount / totalExpenses) * 100).toFixed(2),
    }));

    return report;
  }
}

module.exports = ReportModel;
