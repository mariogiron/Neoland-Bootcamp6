var express = require('express');
var router = express.Router();
const Persona = require('../models/persona');

router.get('/', (req, res) => {
    Persona.find((err, personas) => {
        if (err) return res.json(err)
        console.log(personas);
        res.render('listaPersonas', { arrPersonas: personas })
    })
});

router.get('/:personaId', (req, res) => {
    Persona.findById(req.params.personaId, (err, persona) => {
        if (err) return res.json(err);
        res.render('show', { pers: persona })
    })
});

module.exports = router;