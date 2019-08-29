let express = require('express');
let router = express.Router();

let apiEstudiantesRouter = require('./api/estudiantes');

router.use('/estudiantes', apiEstudiantesRouter);

module.exports = router;