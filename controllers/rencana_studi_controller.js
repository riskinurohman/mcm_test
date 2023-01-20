const RencanaStudi = require("../models/rencana_studi")
const RencanaStudiDetail = require("../models/rencana_studi_detail")
const Matkul = require("../models/matkul")
const Mahasiswa = require("../models/mahasiswa")

const { validationResult } = require('express-validator')

const create_rs = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }

    // ** Check jumlah mahasiswa yang sudah mengambil matakuliah yang sama
    for(const idMatkul of req.body.details) {
      const matkulTaken = await RencanaStudiDetail.findAndCountAll({
        where: {
          id_matkul: idMatkul
        }
      })
      
      // ** Hentikan eksekusi jika sudah ada 4 orang yang mengambil matkul yang sama
      if(matkulTaken.count > 4) {
        const namaMatkul = await Matkul.findByPk(idMatkul)
        res.status(500).json({
          success: false,
          message: `Matakuliah ${namaMatkul.nama_matkul} sudah banyak diambil. Silakan pilih matkul yang lain.`
        })
        return
      } 
    }

    const createRs = await RencanaStudi.create({
      id_mahasiswa: req.body.id_mahasiswa,
    })
    
    const details = req.body.details.map(v => {
      return {
        id_tr_rs: createRs.id,  
        id_matkul: v
      }
    })
    await RencanaStudiDetail.bulkCreate(details)

    res.status(201).json({
      success: true,
      message: 'Berhasil membuat rencana studi'
    })
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal membuat rencana studi"
    })
  }
}

const read_rs = async (req, res) => {
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
    if(page > 1) {
      offset = (page * limit) - limit
    }

    const data = await RencanaStudi.findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: Mahasiswa
        }, 
        {
          model: RencanaStudiDetail,
          include: Matkul
        }
      ]
    })
    
    res.status(200).json(data)
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal memuat rencana studi"
    })
  }
}

const update_rs = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    
    const idRS = req.params.id
    
    // ** Check jumlah mahasiswa yang sudah mengambil matakuliah yang sama
    for(const idMatkul of req.body.details) {
      const matkulTaken = await RencanaStudiDetail.findAndCountAll({
        where: {
          id_matkul: idMatkul
        }
      })
      
      // ** Hentikan eksekusi jika sudah ada 4 orang yang mengambil matkul yang sama
      if(matkulTaken.count > 4) {
        const namaMatkul = await Matkul.findByPk(idMatkul)
        res.status(500).json({
          success: false,
          message: `Matakuliah ${namaMatkul.nama_matkul} sudah banyak diambil. Silakan pilih matkul yang lain.`
        })
        return
      } 
    }

    await RencanaStudiDetail.destroy({
      where: {
        id_tr_rs: idRS
      } 
    })

    const details = req.body.details.map(v => {
      return {
        id_tr_rs: idRS,  
        id_matkul: v
      }
    })

    await RencanaStudiDetail.bulkCreate(details)

    res.status(200).json({
      success: true,
      message: 'Berhasil mengupdate rencana studi'
    })

  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: 'Gagal mengupdate rencana studi'
    })
  }
}

const delete_rs = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    
    await RencanaStudi.destroy({
      where: {
        id: req.params.id
      }
    })

    await RencanaStudiDetail.destroy({
      where: {
        id_tr_rs: req.params.id
      }
    })
    
    res.status(200).json({
      success: true,
      message: "Berhasil menghapus rencana studi"
    })
  } catch(e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Gagal menghapus rencana studi"
    })
  }
}

module.exports = {
  create_rs,
  read_rs,
  update_rs,
  delete_rs
}
