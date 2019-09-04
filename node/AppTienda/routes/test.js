var express = require('express');
var router = express.Router();
const Persona = require('../models/persona');
const Producto = require('../models/producto');

router.get('/', (req, res) => {
    const p = new Persona();
    p.nombre = 'Rocío';
    p.apellidos = 'Jurado';
    p.direccion = 'Chipiona S/N';
    p.save((err) => {
        if (err) return res.send(err)
        res.send('Petición OK');
    })
});

router.get('/insertv2', (req, res) => {
    Persona.create({
        nombre: 'Luis',
        apellidos: 'Moya',
        direccion: 'C Desengaño 31'
    }, (err, persona) => {
        if (err) return res.json({ error: err });
        res.json(persona);
    })
});

router.get('/insertProduct', (req, res) => {
    Producto.create({
        nombre: 'Lavadora TS 300 Balay',
        departamento: 'electrodomesticos',
        precio: 256,
        activo: true
    }, (err, producto) => {
        if (err) return res.json(err);
        res.json(producto);
    })
})

module.exports = router;