'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('Users', {
          id: {
            allowNull: false,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
            primaryKey: true,
            type: Sequelize.UUID,
          },
          name: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true,
          },
          password: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
