const { DataTypes } = require('sequelize');
const Sequelize = require('../utils/database'); 

const Guild = Sequelize.define('guild', { 
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  welcomeChannelId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  welcomeRoleId: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Guild;
