'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = function(models) {
    User.hasMany(models.Link);
  };

  return User;
};
