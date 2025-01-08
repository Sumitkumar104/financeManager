const TransactionModel = require('../models/transactionModel');

class TransactionController {
  static create(req, res) {
    try {
      const transaction = TransactionModel.createTransaction(req.user.id, req.body);
      res.status(201).json({ message: 'Transaction created', transaction });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static getAll(req, res) {
    try {
      const transactions = TransactionModel.getUserTransactions(req.user.id);
      res.status(200).json({ transactions });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static update(req, res) {
    try {
      const transaction = TransactionModel.updateTransaction(
        req.user.id,
        parseInt(req.params.id),
        req.body
      );
      if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
      res.status(200).json({ message: 'Transaction updated', transaction });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static delete(req, res) {
    try {
      const success = TransactionModel.deleteTransaction(req.user.id, parseInt(req.params.id));
      if (!success) return res.status(404).json({ message: 'Transaction not found' });
      res.status(200).json({ message: 'Transaction deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = TransactionController;
