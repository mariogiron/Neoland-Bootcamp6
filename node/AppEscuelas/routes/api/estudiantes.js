let express = require('express');
let router = express.Router();
let alumnoModel = require('../../models/alumnos');

router.use((req, res, next) => {
    if (req.query.format === 'json') {
        next();
    } else {
        res.json({ amenaza: 'Mi API sólo devuelve JSONSes' })
    }
})

router.get('/', (req, res) => {
    alumnoModel.getAllP()
        .then(rows => res.json(rows))
        .catch(err => res.json(err))
})

module.exports = router;