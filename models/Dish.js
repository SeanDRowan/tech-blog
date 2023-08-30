const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dish extends Model {}

Dish.init(
  {
   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: '',
  }
);

module.exports = Dish;