import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(process.env.BD, process.env.USER_BD, process.env.PASS_BD, {
    host: process.env.HOST_BD,
    dialect: 'mysql'
})

const conectarBD = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

export default conectarBD
