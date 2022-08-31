import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '10mb' }))
app.use(compression())
app.get('/', (_, res) => {
    res.send('Hola backend tienda online')
})

// app.use("/v1/api", require("./rutas"));

export default app
