const express = require('express');
const router = express.Router();
const { create_rs, read_rs, delete_rs, update_rs } = require("../controllers/rencana_studi_controller")
const bodyParser = require("body-parser")
const { body, param } = require('express-validator');

router.post('/create_rs', 
  bodyParser.json(), 
  body('id_mahasiswa')
  .notEmpty()
    .withMessage("Id mahasiswa wajib diisi!")
  .exists()
    .withMessage("Id mahasiswa wajib diisi!"), 
  body('details')
    .notEmpty()
      .withMessage("Detail wajib diisi!")
    .exists()
      .withMessage("Detail wajib diisi!")
    .isArray({
      max: 3
    })
      .withMessage("Jumlah matkul yang bisa diambil maks 3!"),
  create_rs
)

router.get('/', read_rs)

router.delete('/delete_rs/:id',
  param('id')
  .notEmpty()
    .withMessage("Id wajib diisi!")
  .exists()
    .withMessage("Id wajib diisi!"),
  delete_rs
)

router.put('/update_rs/:id',
  bodyParser.json(),
  param('id')
  .notEmpty()
    .withMessage("Id wajib diisi!")
  .exists()
    .withMessage("Id wajib diisi!"),
  body('details')
  .notEmpty()
    .withMessage("Detail wajib diisi!")
  .exists()
    .withMessage("Detail wajib diisi!")
  .isArray({
    max: 3
  })
    .withMessage("Jumlah matkul yang bisa diambil maks 3!"),
  update_rs
)

module.exports = router;
