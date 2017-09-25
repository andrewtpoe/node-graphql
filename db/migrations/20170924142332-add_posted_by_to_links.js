'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Links', 'posted_by_id', {
      type: Sequelize.UUID,
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumns('Links', 'posted_by_id');
  },
};
