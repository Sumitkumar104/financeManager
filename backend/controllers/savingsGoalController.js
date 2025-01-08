const SavingsGoalModel = require('../models/savingsGoalModel');

class SavingsGoalController {
  static create(req, res) {
    try {
      const goal = SavingsGoalModel.createSavingsGoal(req.user.id, req.body);
      res.status(201).json({ message: 'Savings goal created', goal });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static getAll(req, res) {
    try {
      const goals = SavingsGoalModel.getUserSavingsGoals(req.user.id);
      res.status(200).json({ goals });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static update(req, res) {
    try {
      const goal = SavingsGoalModel.updateSavingsProgress(
        req.user.id,
        parseInt(req.params.id),
        req.body.progress
      );
      if (!goal) return res.status(404).json({ message: 'Savings goal not found' });
      res.status(200).json({ message: 'Savings goal updated', goal });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static delete(req, res) {
    try {
      const success = SavingsGoalModel.deleteSavingsGoal(req.user.id, parseInt(req.params.id));
      if (!success) return res.status(404).json({ message: 'Savings goal not found' });
      res.status(200).json({ message: 'Savings goal deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = SavingsGoalController;
