import * as dotenv from 'dotenv'
import conectarBD from './src/utils/conexionBD.js'
import app from './app.js'

dotenv.config()

app.listen(process.env.PORT || 3000, async () => {
    console.log('Corriendo por el puerto ' + process.env.PORT || 3000)
    conectarBD()
})
