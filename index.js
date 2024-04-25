const express = require('express');
const cors = require('cors');
const router = require('./rutes/rutes')

// Crear servidor de express
const app = express();

// configuracion de cors
app.use(cors())

//Rutes
app.use('/', router);

const port = 3500;

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto: ' + port)
})