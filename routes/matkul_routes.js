const express = require('express');
const router = express.Router();
const { create_matkul, read_matkul,update_matkul, delete_matkul } = require("../controllers/matkul_controller")
const bodyParser = require("body-parser")
const { body, param, query } = require('express-validator');

router.get('/',
  query('page')
    .exists().withMessage("Halaman tidak ditemukan")
    .notEmpty().withMessage("Halaman tidak ditemukan"),
  read_matkul
)

router.post('/create_matkul', 
  bodyParser.json(), 
  body('kode')
    .notEmpty()
    .withMessage("Kode wajib diisi!")
    .exists()
    .withMessage("Kode wajib diisi!"), 
  body('nama_matkul')
    .notEmpty()
    .withMessage("Nama matkul wajib diisi!")
    .exists()
    .withMessage("Nama matkul wajib diisi!"),
  create_matkul
)

router.put('/update_matkul/:id',
  bodyParser.json(),
  param('id')
    .exists()
    .withMessage("ID Tidak ditemukan"),
  body('kode')
    .notEmpty()
    .withMessage("Kode wajib diisi!")
    .exists()
    .withMessage("Kode wajib diisi!"), 
  body('nama_matkul')
    .notEmpty()
    .withMessage("Nama matkul wajib diisi!")
    .exists()
    .withMessage("Nama matkul wajib diisi!"),
  update_matkul
)

router.delete('/delete_matkul/:id',
  param('id')
    .exists()
    .withMessage("ID Tidak ditemukan"),
  delete_matkul
)

module.exports = router;
