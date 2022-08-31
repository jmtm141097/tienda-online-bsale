const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const cors = require('cors')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '10mb' }))
app.use(compression())
app.get('/', (_, res) => {
    res.send('Hola backend tienda online')
})

app.use('/v1/api', require('./rutas'))

module.exports = app
