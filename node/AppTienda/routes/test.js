var express = require('express');
var router = express.Router();
const Persona = require('../models/persona');
const Producto = require('../models/producto');

// Inserción con un objeto
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

// Inserción a partir del método create
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

// Inserción de Producto con create
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
});

//Filtrado de productos
router.get('/filtrado', (req, res) => {
    Producto.find({
        precio: { $gt: 100, $lt: 300 },
        activo: true
    }, (err, productos) => {
        res.json(productos);
    })
});

// Métodos de instancia
router.get('/mismodepartamento', (req, res) => {
    let prod = new Producto();
    // prod.nombre = 'iPhone Xs';
    prod.departamento = 'electrodomesticos';
    // prod.precio = 1299;
    // prod.activo = true;

    prod.mismoDepartamento((err, productos) => {
        res.json(productos);
    });
});

//Productos activos
router.get('/activos', (req, res) => {
    Producto.activos(false, (err, productos) => {
        res.json(productos);
    })
});

// Asociación de un único producto
router.get('/unoauno', (req, res) => {
    Producto.findById('5d70c16314118b22d03cbb09', (err, producto) => {
        let pers = new Persona();
        pers.nombre = 'PersonaConAsociacion';
        pers.apellidos = 'ApellidosChulis';
        pers.direccion = 'C/ Irún 34';
        pers.producto = producto;
        pers.save((err) => {
            res.json(pers);
        });
    })
});

// Relación uno a muchos
router.get('/unoamuchos', (req, res) => {
    Producto.activos(true, (err, productos) => {
        let pers = new Persona();
        pers.nombre = 'PersonaConMultipleAsociacion';
        pers.apellidos = 'Martínez';
        pers.direccion = 'C Gran Vía 23';
        pers.compras = productos;
        pers.save((err) => {
            res.json(pers);
        })
    })
})

module.exports = router;

