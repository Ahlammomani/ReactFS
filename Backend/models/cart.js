'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // علاقة Many-to-One مع User
      this.belongsTo(models.User, { foreignKey: 'userId' });
      // علاقة Many-to-One مع Product
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};