'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post.init({
    username: DataTypes.STRING,
    status_post: DataTypes.STRING,
    content: DataTypes.STRING,
    file: DataTypes.STRING,
    totalReactions: DataTypes.INTEGER,
    totalComments: DataTypes.INTEGER,
    totalShares: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};