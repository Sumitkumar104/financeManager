const db = require('../utils/db');

class CategoryModel {
  static createCategory(userId, categoryData) {
    const category = { id: db.categories.length + 1, userId, ...categoryData };
    db.categories.push(category);
    return category;
  }

  static getUserCategories(userId) {
    return db.categories.filter(category => category.userId === userId);
  }

  static deleteCategory(userId, categoryId) {
    const index = db.categories.findIndex(c => c.id === categoryId && c.userId === userId);
    if (index !== -1) {
      db.categories.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = CategoryModel;
