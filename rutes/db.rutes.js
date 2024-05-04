"use strict"


/*
    Ruta: /api
*/
const { db } = require("../firebase");
const { Router } = require('express');
const getData = require('../controllers/db.controller')

const routerdb = Router();

// Ruta para mostrar la lista de contactos
routerdb.get("/db", getData.getContacts(req, res));

// Ruta para agregar un nuevo contacto
routerdb.post("/new-contact", getData.addContact (req, res));

// Ruta para eliminar un contacto
routerdb.get("/delete-contact/:id",getData.DeleteContact(req, res) );

// Ruta para editar un contacto
routerdb.get("/edit-contact/:id", getData.PutContact(req, res));

// Ruta para actualizar un contacto
routerdb.post("/update-contact/:id", getData.saveContact(req, res));

module.exports = routerdb;