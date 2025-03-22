'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // علاقة Many-to-One مع Category
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      // علاقة Many-to-Many مع Order عبر OrderItem
      this.belongsToMany(models.Order, { through: models.OrderItem, foreignKey: 'productId' });
      // علاقة One-to-Many مع Cart
      this.hasMany(models.Cart, { foreignKey: 'productId' });
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    isNew: DataTypes.BOOLEAN,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};