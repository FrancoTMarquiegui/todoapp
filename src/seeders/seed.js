const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.models");

const users = [
  { username: "FrancoT", email: "franco@gmail.com", password: "1234" }, // id 1
  { username: "Jhorman", email: "Jhorman@gmail.com", password: "1234" }, // id 2
  { username: "Lucero", email: "lucero@gmail.com", password: "1234" }, // id 3
];

const todos = [
  { title: "tarea 1", description: "Descripcion para 1", userId: 1 },
  { title: "tarea 2", description: "Descripcion para 2", userId: 1 },
  { title: "tarea-imposible", userId: 2 },
  { title: "Dormir zzZZzz", description: "porque node no me deja", userId: 3 },
];

//const categories = [];

//const TodosCategories = [];

//volvemos a sincronizar.
// y utilizamos un forech para recorrer el arreglo usuario por usuario.
//Users.create le estamos diciendo que estamos. insertando informacion sobre la tabla de ususarios.
// create: insertar informacion.
//findOne me sirve para encontrar un unico elemento.
//findAll: como si hicieramos un Select * from
//findByPk: busca un elemento de la tabla por su llave primaria.
//update: actualizar.
//destroy: eliminar.

db.sync({ force : false })
  .then(() => {
    console.log("iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
  })
  .catch((error) => console.log(error));
