let express = require('express');
let router = express.Router();
let alumnoModel = require('../../models/alumnos');
const middlewares = require('../middlewares');

const { check, validationResult } = require('express-validator/check');

// router.use((req, res, next) => {
//     if (req.query.format === 'json') {
//         next();
//     } else {
//         res.json({ amenaza: 'Mi API sólo devuelve JSONSes' })
//     }
// })

// router.use(middlewares.checkUserAuthenticated);

// http://localhost:3000/api/estudiantes
router.get('/', (req, res) => {
    alumnoModel.getAllP()
        .then(rows => res.json(rows))
        .catch(err => res.json(err))
});

// http://localhost:3000/api/estudiantes/7
router.get('/:estudianteId', (req, res) => {
    alumnoModel.getById(req.params.estudianteId)
        .then(alumno => res.json(alumno))
        .catch(err => res.json(err));
});

// Método de inserción de estudiantes
// Definimos validaciones
router.post('/', [
    check('nombre', 'El campo nombre es requerido').exists(),
    check('email', 'El campo email debe ser un mail válido').isEmail(),
    check('edad', 'La edad debe ser mayor de 18 años').custom((value) => {
        if (value > 18) {
            return true;
        } else {
            return false;
        }
    })
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
    }

    alumnoModel.insert(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

router.put('/', (req, res) => {
    alumnoModel.update(req.body.id, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

router.delete('/', (req, res) => {
    alumnoModel.deleteById(req.body.id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
})

module.exports = router;