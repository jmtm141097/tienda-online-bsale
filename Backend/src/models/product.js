import { Sequelize, DataTypes } from 'sequelize'
import Category from './category'

const sequelize = new Sequelize('sqlite::memory:')

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        url_image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        discount: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'product'
    }
)

Product.hasOne(Category, {
    foreignKey: {
        name: 'category',
        type: DataTypes.INTEGER
    }
})

export default Product
