const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const RencanaStudi = sequelize.define('RencanaStudi', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  id_mahasiswa: {
    type: DataTypes.UUID,
    allowNull: false
  },
  id_matkul: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  tableName: 'tr_rencana_studi',
  timestamps: true
})
module.exports = RencanaStudi
