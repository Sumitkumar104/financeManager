const CategoryModel = require('../models/categoryModel');

class CategoryController {
  static create(req, res) {
    try {
      const category = CategoryModel.createCategory(req.user.id, req.body);
      res.status(201).json({ message: 'Category created', category });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static getAll(req, res) {
    try {
      const categories = CategoryModel.getUserCategories(req.user.id);
      res.status(200).json({ categories });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static delete(req, res) {
    try {
      const success = CategoryModel.deleteCategory(req.user.id, parseInt(req.params.id));
      if (!success) return res.status(404).json({ message: 'Category not found' });
      res.status(200).json({ message: 'Category deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = CategoryController;
