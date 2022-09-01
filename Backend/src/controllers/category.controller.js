const { connection } = require('../utils/conexionBD')

const allCategories = (_, res) => {
    connection.query('SELECT * FROM `category`', (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                res.status(400).send({
                    status: 'error',
                    message: 'No existe el producto consultado'
                })
                return
            }
            res.send(results)
            return
        }

        res.status(400).send({
            status: 'error',
            message: 'Ocurrio un error en la base de datos',
            err
        })
    })
}

module.exports = {
    allCategories
}
