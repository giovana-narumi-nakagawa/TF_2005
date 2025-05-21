
const { DataTypes } = require('sequelize');
const db = require('../../database');

const Colaboradores = db.define('colaboradores', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'colaboradores',
  timestamps: false
});

module.exports = Colaboradores;
