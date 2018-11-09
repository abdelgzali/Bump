// sequelize model for user accounts

module.exports = (sequelize, DataTypes) => // function that defines a user model
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
