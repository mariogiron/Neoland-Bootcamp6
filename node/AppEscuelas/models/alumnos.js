const db = require('../db');

// Recupera todos los alumnos a través de un callback
const getAll = (done) => {
    db.get().query('select * from alumnos', (err, rows) => {
        done(err, rows);
    })
}

// Recupera todos los estudiantes a través de una promesa
const getAllP = () => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from alumnos', (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}

const getById = (pAlumnoId) => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from alumnos where id = ?', [pAlumnoId], (err, rows) => {
            if (err) reject(err)
            rows.length == 0 ? reject('No existe alumno para esa id') : resolve(rows[0])
        })
    })
}

module.exports = {
    getAll: getAll,
    getAllP: getAllP,
    getById: getById
}