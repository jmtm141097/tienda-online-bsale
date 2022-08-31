import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('bsale_test', 'bsale_test', 'bsale_test', {
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
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
