const Matkul = require("../models/matkul")
const { validationResult } = require('express-validator')
const { Op } = require("sequelize")

const create_matkul = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    await Matkul.create({
      kode: req.body.kode,
      nama_matkul: req.body.nama_matkul
    })
    res.status(201).json({
      success: true,
      message: 'Berhasil membuat matkul'
    })
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal membuat matkul"
    })
  }
}

const read_matkul = async (req, res) => {
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

    const data = await Matkul.findAndCountAll({
      limit: limit,
      offset: offset,
      where: {
        [Op.or]: {
          nama_matkul: {
            [Op.like]: `%${search}%`
          },
          kode: {
            [Op.like]: `%${search}%`
          }
        }
      }
    })
    
    res.status(200).json(data)
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal memuat matkul"
    })
  }
}

const update_matkul = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    const idMatkul = req.params.id
    await Matkul.update({
      kode: req.body.kode,
      nama_matkul: req.body.nama_matkul
    }, {
      where: {
        id: idMatkul
      }
    })
    res.status(200).json({
      success: true,
      message: 'Berhasil mengupdate matkul'
    })
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal mengupdate matkul"
    })
  }
}

const delete_matkul = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    const idMatkul = req.params.id
    await Matkul.destroy({
      where: {
        id: idMatkul
      }
    })
    res.status(200).json({
      success: true,
      message: 'Berhasil menghapus matkul'
    })
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal menghapus matkul"
    })
  }
}

module.exports = {
  create_matkul,
  read_matkul,
  update_matkul,
  delete_matkul
}
