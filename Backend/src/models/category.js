import { Sequelize, DataTypes } from 'sequelize'
import Product from './product'

const sequelize = new Sequelize('sqlite::memory:')

const Category = sequelize.define(
    'Category',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'category'
    }
)

Category.belongsTo(Product);

export default Category
