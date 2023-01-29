// vamos a importar todos nuestros modelos creados.
const Users = require("./users.model");
const Todos = require("./todos.models");
const Categories = require("./categories.model");
const TodosCategories = require("./todos-categories.models");

const initModels = () => {
  Users;
  Todos;
  Categories;
  TodosCategories;
  //vamos acrear las relaciones en initModels.
  // hasOne --> para que tiene uno solo, 1 a 1.
  //hasMany -->tiene muchos.
  //belongsTo --> pertenece a. Ns ayuda a saber si la llave foranea esta en la tabla.
  // as: nombre con el que va a salir en la tabla
  // foreignKey: nombre de l a llave foranea.

  Todos.belongsTo(Users, { as: "author", foreigkey: "user_id" });
  Users.hasMany(Todos, { as: "task", foreignKey: "user_id" });

  // realcion M-M entre categories y task
  TodosCategories.belongsTo(Todos, {as: 'task', foreignKey: 'todos_id'});
  Todos.hasMany(TodosCategories, {as: 'category', foreignKey: 'todo_id'});

  TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
  Categories.hasMany(TodosCategories, {as: 'task', foreignKey: 'category_id'});

};

module.exports = initModels;
