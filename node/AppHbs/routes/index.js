var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    mensaje: '<strong>Este es el mensaje</strong>',
    mostrarMensaje: false,
    estudiantes: [
      { nombre: 'Mario', asignaturas: ['programacion', 'electronica', 'algebra'] },
      { nombre: 'Rosa', asignaturas: ['calculo', 'electronica'] },
      { nombre: 'Antonio', asignaturas: ['programacion', 'calculo II', 'sistemas'] },
      { nombre: 'Rodolfo', asignaturas: [] }
    ],
    autor: { nombre: 'Ramiro', apellido: 'Maeztu' },
    nombre: 'Mario Girón'
  });
});

module.exports = router;
