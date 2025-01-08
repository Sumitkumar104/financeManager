const db = require('../utils/db');

class TransactionModel {
  static createTransaction(userId, transactionData) {
    const transaction = { id: db.transactions.length + 1, userId, ...transactionData };
    db.transactions.push(transaction);
    return transaction;
  }

  static getUserTransactions(userId) {
    return db.transactions.filter(transaction => transaction.userId === userId);
  }

  static updateTransaction(userId, transactionId, updatedData) {
    const transaction = db.transactions.find(
      t => t.id === transactionId && t.userId === userId
    );
    if (transaction) {
      Object.assign(transaction, updatedData);
    }
    return transaction;
  }

  static deleteTransaction(userId, transactionId) {
    const index = db.transactions.findIndex(
      t => t.id === transactionId && t.userId === userId
    );
    if (index !== -1) {
      db.transactions.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = TransactionModel;
