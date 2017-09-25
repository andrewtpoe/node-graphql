'use strict';

module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    id: {
      allowNull: false,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
      primaryKey: true,
      type: DataTypes.UUID,
    },
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    posted_by_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  Link.associate = function(models) {
    Link.belongsTo(models.User, { foreignKey: 'posted_by_id' });
  };

  return Link;
};
