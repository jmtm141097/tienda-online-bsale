const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASS_BD,
    database: process.env.BD
})

const mantenerConexion = () => {
    connection.query(`${"SELECT 'KEEP_ALIVE'"}`)
}

module.exports = {
    connection,
    mantenerConexion
}
