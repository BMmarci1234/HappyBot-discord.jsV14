// models/infraction.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Infraction = sequelize.define('Infraction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {  // Ezt a mezőt hozzáadtuk
    type: DataTypes.STRING,
    allowNull: false
  },
  guildId: {  // Ezt a mezőt hozzáadtuk
    type: DataTypes.STRING,
    allowNull: false
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'No reason provided'
  },
  enforcerId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

module.exports = Infraction;
