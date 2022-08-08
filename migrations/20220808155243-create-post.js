'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      post_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      status_post: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.STRING
      },
      totalReactions: {
        type: Sequelize.INTEGER
      },
      totalComments: {
        type: Sequelize.INTEGER
      },
      totalShares: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};