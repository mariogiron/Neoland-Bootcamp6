var express = require('express');
var router = express.Router();

let login = true;

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('INDEX: ', req.fechaActual);
  res.render('index', { title: 'Express' });
});

// http://localhost:3000/contacto
router.get('/contacto', [checkUserToken, checkLogin, middleware1, middleware2], (req, res) => {

  res.send('RESPUESTA FINAL');
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
