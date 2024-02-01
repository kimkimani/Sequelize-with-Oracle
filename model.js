const { DataTypes } = require('sequelize');
// Import the Sequelize Oracle connection instance
const sequelize = require('./db');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

// Synchronize the model with the database
sequelize.sync({ force: true }).then(() => {
  console.log('User table created!');
});

module.exports = User;