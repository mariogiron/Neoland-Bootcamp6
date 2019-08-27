let express = require('express');
let router = express.Router();

// http://localhost:3000/estudiantes/hola

router.get('/', (req, res) => {
    res.render('estudiantes/list');
})

router.get('/new', (req, res) => {
    res.render('estudiantes/form');
})

router.get('/:estudianteId', (req, res) => {
    res.render('estudiantes/show', {
        estudianteId: req.params.estudianteId
    });
})

router.post('/create', (req, res) => {
    console.log(req.body);
    res.redirect('/estudiantes');
})

module.exports = router;