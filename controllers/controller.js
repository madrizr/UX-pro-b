const { response } = require('express');
const User = require('../models/user.model')

const user = new User(25, 'pedro.perez', 112345);

const messages = {
    ErrorInesperado: {ok: false, msg: 'Error Inesperado'},
    dataUsers: { ok: true, msg: 'success', user  }
}

const getData = (req, res = response) => {

    try {
        res.json( messages.dataUsers )
    }
    catch(error){
        console.log(error);
        res.json({
            error,
            response: messages.ErrorInesperado
        })
    }
}

module.exports = getData;