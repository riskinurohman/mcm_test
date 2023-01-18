const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Mahasiswa = sequelize.define('Mahasiswa', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  npm: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tempat_lahir: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tanggal_lahir: {
    type: DataTypes.DATE,
    allowNull: false
  },
  gender: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  agama: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'ms_mahasiswa',
  timestamps: true
})
module.exports = Mahasiswa
