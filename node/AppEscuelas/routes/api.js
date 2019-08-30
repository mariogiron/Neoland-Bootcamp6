let express = require('express');
let router = express.Router();

let apiEstudiantesRouter = require('./api/estudiantes');
let apiUsuariosRouter = require('./api/usuarios');

router.use('/estudiantes', apiEstudiantesRouter);
router.use('/usuarios', apiUsuariosRouter);

module.exports = router;