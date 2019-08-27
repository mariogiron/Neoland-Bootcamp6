let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('estudiantes/list');
})

module.exports = router;