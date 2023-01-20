const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')
const RencanaStudi = require("../models/rencana_studi")
const Matkul = require("../models/matkul")

const RencanaStudiDetail = sequelize.define('RencanaStudiDetail', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  id_tr_rs: {
    type: DataTypes.UUID,
    allowNull: false
  },
  id_matkul: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  tableName: 'tr_rs_detail',
  timestamps: true
})

RencanaStudiDetail.belongsTo(RencanaStudi, { foreignKey: 'id_tr_rs' })
RencanaStudi.hasMany(RencanaStudiDetail, { foreignKey: 'id_tr_rs' })
RencanaStudiDetail.belongsTo(Matkul, { foreignKey: 'id_matkul' })
Matkul.hasMany(RencanaStudiDetail, { foreignKey: 'id_matkul' })

module.exports = RencanaStudiDetail
