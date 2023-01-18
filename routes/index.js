var express = require('express');
var router = express.Router();

const sequelize = require('../config/database')

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    await sequelize.authenticate()
    console.log("K")
  } catch(e) {
    console.log(e)
  }
});

module.exports = router;
