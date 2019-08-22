var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:3000/users
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// http://localhost:3000/users/87
router.get('/:userId', (req, res) => {
  console.log(req.params.userId);
  res.send('Manejador de ruta para user con ID: ' + req.params.userId);
})

module.exports = router;
