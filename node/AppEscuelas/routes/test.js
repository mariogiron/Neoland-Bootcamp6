let express = require('express');
let router = express.Router();

const mysql = require('mysql');

let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'neoland',
    port: 8889
})

router.get('/', (req, res) => {
    connection.connect((err) => {
        if (err) return console.log(err)

        connection.query('select * from alumnos order by nombre asc', (err, rows) => {
            if (err) return res.send(err.message)
            res.json(rows);
        })

        // res.send('Conexión completa')
    })
})

module.exports = router;
