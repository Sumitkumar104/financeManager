const db = require('../utils/db');

class SavingsGoalModel {
  static createSavingsGoal(userId, savingsGoalData) {
    const goal = { id: db.savingsGoals.length + 1, userId, progress: 0, ...savingsGoalData };
    db.savingsGoals.push(goal);
    return goal;
  }

  static getUserSavingsGoals(userId) {
    return db.savingsGoals.filter(goal => goal.userId === userId);
  }

  static updateSavingsProgress(userId, goalId, progress) {
    const goal = db.savingsGoals.find(g => g.id === goalId && g.userId === userId);
    if (goal) {
      goal.progress = progress;
      return goal;
    }
    return null;
  }

  static deleteSavingsGoal(userId, goalId) {
    const index = db.savingsGoals.findIndex(g => g.id === goalId && g.userId === userId);
    if (index !== -1) {
      db.savingsGoals.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = SavingsGoalModel;
