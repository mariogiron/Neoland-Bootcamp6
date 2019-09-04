var express = require('express');
var router = express.Router();
const Persona = require('../models/persona');

router.get('/', (req, res) => {
    Persona.find((err, personas) => {
        if (err) return res.json(err)
        res.render('listaPersonas', { arrPersonas: personas })
    })
});

module.exports = router;