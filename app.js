const express = require('express')
const logger = require('morgan')

const matkulRouter = require("./routes/matkul_routes")
const mhsRouter = require("./routes/mhs_routes")
const rencanaStudiRouter = require("./routes/rs_routes")

const app = express()
const port = 3000

app.use(logger('dev'))

app.use('/matkul', matkulRouter)
app.use('/mahasiswa', mhsRouter)
app.use('/rencana_studi', rencanaStudiRouter)

app.listen(port, () => {
  console.log("Server started on port", port)
})
