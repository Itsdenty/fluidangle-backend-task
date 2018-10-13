'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  up: function up(queryInterface, Sequelize) {
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(30)
      },
      lastName: {
        type: Sequelize.STRING(30)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      password: {
        type: Sequelize.STRING(100)
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('users');
  }
};