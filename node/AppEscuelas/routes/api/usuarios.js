let express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt');

let usuariosModel = require('../../models/usuarios');

router.post('/registro', async (req, res) => {
    // usuariosModel.insert(req.body)
    //     .then(result => {
    //         console.log(result.insertId)
    //         usuariosModel.getById(result.insertId)
    //             .then(usuario => {
    //                 res.json(usuario)
    //             })
    //             .catch(err => {
    //                 res.json(err)
    //             })
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     })
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    try {
        let result = await usuariosModel.insert(req.body);
        let usuario = await usuariosModel.getById(result.insertId);
        res.json(usuario);
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;