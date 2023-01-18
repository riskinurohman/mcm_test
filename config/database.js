const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mcm_test', 'root', '', {
  dialect: 'mysql'
})
module.exports = sequelize
