// instancia para la conexion dce la db
const db = require('../utils/database');
// tipo de datos de sequielize  varchar --> string
const { DataTypes } = require('sequelize');

// definir el modelo de usuarios
// los modelos se definen con una mayuscula

//parametros
//nombre de la tabla
//los atributos de las talblas ( objeto )
const Users = db.define('users', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    //validacion y la misma base de dato se da cuenta lo que estamos pasando y si es un correo electronico
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
