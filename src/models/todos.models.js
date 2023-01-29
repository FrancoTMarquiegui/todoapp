// instancia para la conexion dce la db
const db = require('../utils/database');
// tipo de datos de sequielize  varchar --> string
const { DataTypes } = require('sequelize');
const Users = require('./users.model')

const Todos = db.define('todos', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_complete',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    //indicamos que es una llave foranea.
    references: {
      model: Users,
      key: 'id',
    }
  }
}) 

module.exports = Todos;
