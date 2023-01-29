// importamos express
const express = require("express");
const db = require("./utils/database.js");
const initModels = require("./models/init.model");
const Users = require("./models/users.model.js");

//crear una intancia express
const app = express();

app.use(express.json()); // sirve para que lo que venga en el body venga en un json.

const PORT = 8000;

// probando la conexion para la base de datos

// esto se necesita para concectar una base de datos db.
db.authenticate()
  .then(() => console.log("autentificacion exitosa"))
  .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db
// usar el metodo sync para sincronizar la informacion en la base de datos
// devuelve una promesa y la resolvemos con then
// Al agregar alter: nos permite realizar modificaciones en nuestra tabla
db.sync({ force: false }) //devuelve una promesa.
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "bienvenidos al servidor" });
});

// definir las rutas de nustros endPoins (ep).
// todas las cosultas de usuarios deberiamos visitar localhost:8000/users --> todo para usuarios.
//localhost:8000/todos --> todo para tareas.

//GET a /users
app.get("/users", async (req, res) => {
  try {
    // vamos a obtener el resultado de consultar a todos los usuarios de la BD.
    const result = await Users.findAll(); // SELECT * FROM users;
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// obtener un usuario sabiendo su id.
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// obtener un usuario por username
app.get("/user/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } }); // SELECT * FROM users WHERE username = postgres.
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// ahora creamos un usuario:
//para enviar informacion se envia desde el body.
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user); // insertar informacion en la base de datos.
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error); //para manejar el error
    console.log(error);
  }
});

// Actualizar un usuariom, solo podemos cambiar password.
//para saber que usuario actalizar le mandamos un id
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; //{id:2}
    const field = req.body;
    const result = Users.update(field, {
      where: { id },
    }); //el primero es el campo que queremos actualizar y el segundo un objeto que queremos actualizar
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//eliminar un usuario
app.delete('/users/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const result = Users.destroy({
      where: {id}
    });
    res.status(200).json(result); 
  } catch (error) {
    res.status(400).json(error.massage); 
  }
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});

//vamos a terminar los modelos --> rapido
//crear las realciones entre los modelos
//les voy a enseñar a insertar informacion desde este mismo proyecto.
