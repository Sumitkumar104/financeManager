const db = require('../utils/db');
const bcrypt = require('bcrypt');

class UserModel {
  static async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = { id: db.users.length + 1, ...userData, password: hashedPassword };
    db.users.push(user);
    return { id: user.id, name: user.name, email: user.email };
  }

  static findUserByEmail(email) {
    return db.users.find(user => user.email === email);
  }

  static async validatePassword(inputPassword, storedPassword) {
    return bcrypt.compare(inputPassword, storedPassword);
  }
}

module.exports = UserModel;
