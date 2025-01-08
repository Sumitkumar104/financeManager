const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'mysecret';

class AuthController {
  static async register(req, res) {
    try {
      const { name, email, password } = req.body;
      if (UserModel.findUserByEmail(email)) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const user = await UserModel.createUser({ name, email, password });
      res.status(201).json({ message: 'User registered', user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = UserModel.findUserByEmail(email);
      if (!user) return res.status(404).json({ message: 'User not found' });

      const isPasswordValid = await UserModel.validatePassword(password, user.password);
      if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = AuthController;
