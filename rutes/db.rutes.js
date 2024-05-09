"use strict"


/*
    Ruta: /api
*/
const { Router } = require('express');
const getData = require('../controllers/db.controller')
const db = require("../services/db/firebase");

const routerdb = Router();

// Ruta para mostrar la lista de contactos
routerdb.get("/", getData.getContacts);

// Ruta para agregar un nuevo contacto
routerdb.post("/new-contact", getData.addContact);

// Ruta para eliminar un contacto
routerdb.get("/delete-contact/:id",getData.DeleteContact);

// Ruta para editar un contacto
routerdb.get("/edit-contact/:id", getData.PutContact);

// Ruta para actualizar un contacto
routerdb.post("/update-contact/:id", getData.saveContact);

module.exports = routerdb;