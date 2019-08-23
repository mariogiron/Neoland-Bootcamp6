var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:3000/users
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// http://localhost:3000/users/87
// http://localhost:3000/users/87?format=json&appid=213213msad
router.get('/:userId', (req, res) => {
  console.log(req.params.userId);
  console.log(req.query.appid);
  if (req.query.format == 'json') {
    res.json({ param1: 'value1', param2: 'value2' });
  } else {
    res.send('Manejador de ruta para user con ID: ' + req.params.userId);
  }
})

//POST http://localhost:3000/users/new
router.post('/new/:departamento', (req, res) => {
  console.log(req.body.nombre);
  console.log(req.params.departamento);
  res.send('Petición POST sobre /users/new')
})

module.exports = router;
