const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')
const Mahasiswa = require("../models/mahasiswa")

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
  }
}, {
  tableName: 'tr_rencana_studi',
  timestamps: true
})

RencanaStudi.belongsTo(Mahasiswa, {
  foreignKey: 'id_mahasiswa'
})

Mahasiswa.hasMany(RencanaStudi, {
  foreignKey: 'id_mahasiswa'
})
module.exports = RencanaStudi
