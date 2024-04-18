const express = require('express');

const app = express();

const respuesta = {
    'ok': true,
    'msg': 'base para el proyeecto'
}

app.get('/', (req, res)  => {
  res.send(respuesta)
})

app.listen(3500)