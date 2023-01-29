const {Sequelize} = require('sequelize');

// creamos una instancia de parametro de configuracion de nuestra base de datos
// un objeto de configuracion --> credenciales de mi base de datos


const db = new Sequelize({
  database : 'todoapp',
  username : 'postgres',
  password : 'root',
  host : 'localhost',
  posrt : '5432',
  dialect : 'postgres' //base de datos que estamos usando.
})

module.exports = db;