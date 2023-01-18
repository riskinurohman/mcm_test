const express = require('express')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()
const port = 3000

app.use(logger('dev'))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log("Server started on port", port)
})
