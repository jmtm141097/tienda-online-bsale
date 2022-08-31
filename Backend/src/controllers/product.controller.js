const { connection } = require('../utils/conexionBD')

const findProductByID = (req, res) => {
    connection.query('SELECT * FROM `product` WHERE id = ?', [req.params.id], (err, results) => {
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

const allProducts = async (_, res) => {
    connection.query('SELECT * FROM `product`', (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                res.status(400).send({
                    status: 'error',
                    message: 'No hay productos'
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
    findProductByID,
    allProducts
}
