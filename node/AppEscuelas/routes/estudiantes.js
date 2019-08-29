let express = require('express');
let router = express.Router();

const modelAlumno = require('../models/alumnos');

// http://localhost:3000/estudiantes/
router.get('/', (req, res) => {
    modelAlumno.getAllP()
        .then((rows) => {
            res.render('estudiantes/list', { estudiantes: rows });
        })
        .catch((err) => {
            res.send(err);
        })
})

// http://localhost:3000/estudiantes/v2
router.get('/v2', async (req, res) => {
    try {
        let rows = await modelAlumno.getAllP();
        res.render('estudiantes/list', { estudiantes: rows });
    } catch (err) {
        res.send('ERRORACO!!')
    }
})

router.get('/new', (req, res) => {
    res.render('estudiantes/form');
})

router.get('/delete/:estudianteId', (req, res) => {
    modelAlumno.deleteById(req.params.estudianteId)
        .then((result) => {
            console.log(result);
            res.redirect('/estudiantes')
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get('/:estudianteId', async (req, res) => {
    let alumno = await modelAlumno.getById(req.params.estudianteId)

    res.render('estudiantes/show', {
        estudianteId: req.params.estudianteId,
        alumno: alumno
    });
})

router.post('/create', (req, res) => {
    console.log(req.body);
    modelAlumno.insert(req.body)
        .then((result) => {
            console.log(result);
            res.redirect('/estudiantes')
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;