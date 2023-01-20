const express = require('express');
const router = express.Router();
const { create_mahasiswa, read_mahasiswa,update_mahasiswa, delete_mahasiswa } = require("../controllers/mhs_controller")
const bodyParser = require("body-parser")
const { body, param, query } = require('express-validator');

router.get('/',
  query('page')
    .exists().withMessage("Halaman tidak ditemukan")
    .notEmpty().withMessage("Halaman tidak ditemukan"),
  read_mahasiswa
)

router.post('/create_mahasiswa', 
  bodyParser.json(), 
  body('npm')
    .notEmpty()
      .withMessage("NPM wajib diisi!")
    .isAlphanumeric()
      .withMessage("NPM Tidak Valid")
    .exists()
      .withMessage("NPM wajib diisi!"), 
  body('nama')
    .notEmpty()
      .withMessage("Nama wajib diisi!")
    .isString()
      .withMessage("Nama tidak valid")
    .exists()
      .withMessage("Nama wajib diisi!"),
  body('tempat_lahir')
    .notEmpty()
      .withMessage("Tempat lahir wajib diisi!")
    .isString()
      .withMessage("Tempat lahir tidak valid")
    .exists()
      .withMessage("Tempat lahir wajib diisi!"),
  body('tanggal_lahir')
    .notEmpty()
      .withMessage("Tanggal lahir wajib diisi!")
    .isDate()
      .withMessage("Tanggal lahir tidak valid")
    .exists()
      .withMessage("Tanggal lahir wajib diisi!"),
  body('gender')
    .notEmpty()
      .withMessage("Jenis kelamin wajib diisi!")
    .isLength({
      max: 1
    })
      .withMessage("Maksimal karakter hanya 1")
    .isString()
      .withMessage("Jenis kelamin tidak valid")
    .exists()
      .withMessage("Jenis kelamin wajib diisi!"),
  body('agama')
    .notEmpty()
      .withMessage("Agama wajib diisi!")
    .isLength({
      max: 1
    })
      .withMessage("Maksimal karakter hanya 1")
    .isString()
      .withMessage("Agama tidak valid")
    .exists()
      .withMessage("Agama wajib diisi!"),
  body('email')
    .notEmpty()
      .withMessage("Agama wajib diisi!")
    .exists()
      .withMessage("Agama wajib diisi!")
    .isEmail()
      .withMessage("Email tidak valid")
    ,
  body('phone')
    .notEmpty()
      .withMessage("Telp wajib diisi!")
    .exists()
      .withMessage("Telp wajib diisi!")
    .isNumeric()
      .withMessage("Telp tidak valid")
    ,
  body('address')
    .notEmpty()
      .withMessage("Alamat wajib diisi!")
    .exists()
      .withMessage("Alamat wajib diisi!")
    ,
  create_mahasiswa
)

router.put('/update_mahasiswa/:id',
  bodyParser.json(),
  param('id')
    .exists()
    .withMessage("ID Tidak ditemukan"),
    body('npm')
    .notEmpty()
      .withMessage("NPM wajib diisi!")
    .isAlphanumeric()
      .withMessage("NPM Tidak Valid")
    .exists()
      .withMessage("NPM wajib diisi!"), 
  body('nama')
    .notEmpty()
      .withMessage("Nama wajib diisi!")
    .isString()
      .withMessage("Nama tidak valid")
    .exists()
      .withMessage("Nama wajib diisi!"),
  body('tempat_lahir')
    .notEmpty()
      .withMessage("Tempat lahir wajib diisi!")
    .isString()
      .withMessage("Tempat lahir tidak valid")
    .exists()
      .withMessage("Tempat lahir wajib diisi!"),
  body('tanggal_lahir')
    .notEmpty()
      .withMessage("Tanggal lahir wajib diisi!")
    .isDate()
      .withMessage("Tanggal lahir tidak valid")
    .exists()
      .withMessage("Tanggal lahir wajib diisi!"),
  body('gender')
    .notEmpty()
      .withMessage("Jenis kelamin wajib diisi!")
    .isLength({
      max: 1
    })
      .withMessage("Maksimal karakter hanya 1")
    .isString()
      .withMessage("Jenis kelamin tidak valid")
    .exists()
      .withMessage("Jenis kelamin wajib diisi!"),
  body('agama')
    .notEmpty()
      .withMessage("Agama wajib diisi!")
    .isLength({
      max: 1
    })
      .withMessage("Maksimal karakter hanya 1")
    .isString()
      .withMessage("Agama tidak valid")
    .exists()
      .withMessage("Agama wajib diisi!"),
  body('email')
    .notEmpty()
      .withMessage("Agama wajib diisi!")
    .exists()
      .withMessage("Agama wajib diisi!")
    .isEmail()
      .withMessage("Email tidak valid")
    ,
  body('phone')
    .notEmpty()
      .withMessage("Telp wajib diisi!")
    .exists()
      .withMessage("Telp wajib diisi!")
    .isNumeric()
      .withMessage("Telp tidak valid")
    ,
  body('address')
    .notEmpty()
      .withMessage("Alamat wajib diisi!")
    .exists()
      .withMessage("Alamat wajib diisi!")
    ,
  update_mahasiswa
)

router.delete('/delete_mahasiswa/:id',
  param('id')
    .exists()
    .withMessage("ID Tidak ditemukan"),
  delete_mahasiswa
)

module.exports = router;
