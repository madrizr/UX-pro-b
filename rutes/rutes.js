"use strict"

/*
    Ruta: /api
*/

const { Router } = require('express');
const getData = require('../controllers/controller')

const router = Router();

router.get('/', (req, res)  => {
    res.send( {ok:true, msg: 'Escriba una direccion correcta'} )
  })

router.get('/user', getData)

module.exports = router;  

