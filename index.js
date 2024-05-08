const express = require('express');
const cors = require('cors');
const router = require('./rutes/rutes')
const routerdb = require('./rutes/db.rutes')
require("./firebase")

// Crear servidor de express
const app = express();

// configuracion de cors
app.use(cors())

//Rutes
app.use('/', router);
app.use('/db', routerdb);


app.listen(process.env.PORT, () => {
  console.log('Servidor escuchando en el puerto: ' + process.env.PORT || 3000)
})