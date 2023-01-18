const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Matkul = sequelize.define('Matkul', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  kode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nama_matkul: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'ms_matkul',
  timestamps: true
})
module.exports = Matkul
