'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('Links', {
          id: {
            allowNull: false,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
            primaryKey: true,
            type: Sequelize.UUID,
          },
          url: {
            type: Sequelize.STRING,
          },
          description: {
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
    return queryInterface.dropTable('Links');
  },
};
