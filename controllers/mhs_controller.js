const Mahasiswa = require("../models/mahasiswa")
const { validationResult } = require('express-validator')
const { Op } = require("sequelize")

const create_mahasiswa = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    await Mahasiswa.create({
      npm: req.body.npm,
      nama: req.body.nama,
      tempat_lahir: req.body.tempat_lahir,
      tanggal_lahir: req.body.tanggal_lahir,
      gender: req.body.gender,
      agama: req.body.agama,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address
    })
    res.status(201).json({
      success: true,
      message: 'Berhasil mendaftarkan mahasiswa'
    })
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal mendaftarkan mahasiswa"
    })
  }
}

const read_mahasiswa = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }

    // ** Pagination
    let offset = 0
    const limit = req.query.limit !== "" && req.query !== undefined ? parseInt(req.query.limit) : 10
    const page = parseInt(req.query.page)
    const search = req.query.search
    if(page > 1) {
      offset = (page * limit) - limit
    }

    const data = await Mahasiswa.findAndCountAll({
      limit,
      offset,
      where: {
        [Op.or]: {
          npm: {
            [Op.like]: `%${search}%`
          },
          nama: {
            [Op.like]: `%${search}%`
          },
          email: {
            [Op.like]: `%${search}%`
          },
          phone: {
            [Op.like]: `%${search}%`
          },
        }
      }
    })
    
    res.status(200).json(data)
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal memuat mahasiswa"
    })
  }
}

const update_mahasiswa = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    const idMahasiswa = req.params.id
    await Mahasiswa.update({
      npm: req.body.npm,
      nama: req.body.nama,
      tempat_lahir: req.body.tempat_lahir,
      tanggal_lahir: req.body.tanggal_lahir,
      gender: req.body.gender,
      agama: req.body.agama,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address
    }, {
      where: {
        id: idMahasiswa
      }
    })
    res.status(200).json({
      success: true,
      message: 'Berhasil mengupdate mahasiswa'
    })
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal mengupdate mahasiswa"
    })
  }
}

const delete_mahasiswa = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    const idMahasiswa = req.params.id
    await Mahasiswa.destroy({
      where: {
        id: idMahasiswa
      }
    })
    res.status(200).json({
      success: true,
      message: 'Berhasil menghapus mahasiswa'
    })
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal menghapus mahasiswa"
    })
  }
}

module.exports = {
  create_mahasiswa,
  read_mahasiswa,
  update_mahasiswa,
  delete_mahasiswa
}
