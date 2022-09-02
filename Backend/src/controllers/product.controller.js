const { connection } = require('../utils/conexionBD')

const productsByCategory = (req, res) => {
    connection.query('SELECT * FROM `product` WHERE category = ?', [req.params.idCategory], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                res.status(400).send({
                    status: 'error',
                    message: 'No existen productos para la categoria que acabas de consultar'
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

const productsByName = async (req, res) => {
    connection.query(`SELECT * FROM product WHERE name LIKE '%${req.query.product}%'`, (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                res.status(400).send({
                    status: 'error',
                    message: `No hay productos para la busqueda: ${req.query.product}`
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

module.exports = { productsByCategory, allProducts, productsByName }
