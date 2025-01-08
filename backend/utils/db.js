const db = {
    users: [], // { id, name, email, password }
    transactions: [], // { id, userId, amount, date, category, description }
    categories: [], // { id, userId, name }
    savingsGoals: [] // { id, userId, targetAmount, targetDate, progress }
  };
  
  module.exports = db;
  