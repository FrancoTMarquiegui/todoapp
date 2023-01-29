// instancia para la conexion dce la db
const db = require('../utils/database');
// tipo de datos de sequielize  varchar --> string
const { DataTypes, Model } = require('sequelize');

const Categories = db.define('categories', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
}, {
 //eliminar el createdAt y updatedAt
 timestamps: false,
})

module.exports = Categories;