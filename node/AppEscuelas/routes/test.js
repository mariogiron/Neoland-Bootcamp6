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

router.get('/insert', (req, res) => {
    connection.connect((err) => {
        if (err) return console.log(err);
        let nombre = 'Mario';
        let apellidos = 'Girón';
        let matricula = 'AF453';
        let activo = true;
        let arr = [nombre, apellidos, matricula, activo]
        const query = `insert into alumnos (nombre, apellidos, matricula, activo) values (?, ?, ?, ?)`;

        // Primer param - Sentencia SQL. Donde tengamos que insertar valores colocamos el caracter ?
        // Segundo param - Array con los valores que se van a sustitir por las ?
        // ¡¡ Cuidado con el orden!!
        connection.query(query, arr, (err, result) => {
            if (err) return res.send(err.message);
            connection.end();
            res.json(result);
        })
    });
})

module.exports = router;