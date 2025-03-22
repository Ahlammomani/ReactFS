'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // علاقة One-to-Many مع Order
      this.hasMany(models.Order, { foreignKey: 'userId' });
      // علاقة One-to-Many مع Cart
      this.hasMany(models.Cart, { foreignKey: 'userId' });
    }
  }
  User.init({
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    email: DataTypes.STRING,
    fullName: DataTypes.STRING,
    address: DataTypes.TEXT,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};