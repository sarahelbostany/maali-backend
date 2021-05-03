'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    // models.expense.belongsTo(models.category)
    models.expense.belongsTo(models.user)
    }
  };
  expense.init({
    expense: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    category: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'expense',
  });
  return expense;
};
