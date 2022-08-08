'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  posts.init({
    username: DataTypes.STRING,
    status_post: DataTypes.STRING,
    content: DataTypes.STRING,
    file: DataTypes.STRING,
    totalReactions: DataTypes.INTEGER,
    totalComments: DataTypes.INTEGER,
    totalShares: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posts',
    tableName: 'posts',
    freezeTableName: true,
  });
  return posts;
};