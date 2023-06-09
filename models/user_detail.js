'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_detail.init({
    password: DataTypes.STRING
  }, {
    sequelize,
    // timestamps:false,
    modelName: 'user_detail',
  });
  return user_detail;
};