// instancia para la conexion dce la db
const db = require('../utils/database');
// tipo de datos de sequielize  varchar --> string
const { DataTypes } = require('sequelize');
const Categories = require('./categories.model');
const Todos = require('./todos.models');


const TodosCategories = db.define('todos_categories', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id',
    references: {
      model: Categories,
      key: 'id',
    }
  },
  todoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'todo_id',
    references: {
      model: Todos,
      key: 'id',
    }
  },
}, {
  timestamps: false,
}) 

module.exports = TodosCategories;
