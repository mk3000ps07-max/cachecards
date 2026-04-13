const express = require('express')
const cors = require('cors')
const { errorHandler } = require('./utils/asyncHandler')

const app = express()


app.use(cors())
app.use(express.json())

const cardRoutes = require('./routes/cardRoutes')

app.use('/api/cards', cardRoutes)

app.use(errorHandler)

module.exports = app