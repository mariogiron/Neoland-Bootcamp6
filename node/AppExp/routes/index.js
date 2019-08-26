var express = require('express');
var router = express.Router();

let login = true;

router.use((req, res, next) => {
  console.log('PASA POR EL USE de index.js');
  next();
})

router.all('/', (req, res, next) => {
  console.log('PASA POR EL ALL DE index.js');
  next();
})

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('INDEX: ', req.fechaActual);
  let randomNum = Math.round(Math.random() * 10);


  res.render('index', {
    title: 'Express',
    clases: ['rojo', 'cuadrado', 'grande'],
    numEstudiantes: randomNum,
    activo: true,
    fechaActual: req.fechaActual,
    metodo: req.method
  });
});

// http://localhost:3000/contacto
router.get('/contacto', [checkLogin, middleware1, middleware2], (req, res) => {
  res.render('contacto', {
    personas: [
      { nombre: 'Rocío', apellidos: 'Molero', edad: 32 },
      { nombre: 'Manuel', apellidos: 'García', edad: 29 },
      { nombre: 'Ramón', apellidos: 'Gutiérrez', edad: 48 }
    ]
  });
});

router.get('/about', [checkLogin, middleware2], (req, res) => {
  res.send('RESPUESTA DE ABOUT');
});

router.route('/libro')
  .get((req, res) => {
    res.send('Petición GET sobre /libro')
  })
  .post((req, res) => {
    res.send('Petición POST sobre /libro')
  })
  .delete((req, res) => {
    res.send('Petición DELETE sobre /libro')
  })

function middleware1(req, res, next) {
  console.log('Pasa por el primer Middleware');
  next();
}

function middleware2(req, res, next) {
  console.log('Pasa por el segundo Middleware');
  next();
}

function checkLogin(req, res, next) {
  if (login) {
    next();
  } else {
    res.send('Login debe ser igual a true');
  }
}

function checkUserToken(req, res, next) {
  if (req.headers['user-token']) {
    // Compruebo en BD si el user-token es correcto
    next();
  } else {
    res.send('Debes incluir la cabecera user-token');
  }
}

module.exports = router;
