'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // علاقة One-to-Many مع Product
      this.hasMany(models.Product, { foreignKey: 'categoryId' });
    }
  }
  Category.init({
    categoryName: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};