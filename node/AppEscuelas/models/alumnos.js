const db = require('../db');

// Recupera todos los alumnos a través de un callback
const getAll = (done) => {
    db.get().query('select * from alumnos', (err, rows) => {
        done(err, rows);
    })
}

const getAllP = () => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from alumnos', (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}

module.exports = {
    getAll: getAll
}