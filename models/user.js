'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    connections: DataTypes.INTEGER,
    pending: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    cover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
    tableName: 'users',
    freezeTableName: true
  });
  return users;
};