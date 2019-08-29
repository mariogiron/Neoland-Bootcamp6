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

const insert = ({ nombre, apellidos, email, edad, matricula, nota_media, sexo }) => {
    return new Promise((resolve, reject) => {
        let q = 'insert into alumnos (nombre, apellidos, email, edad, matricula, fecha_matricula, nota_media, sexo) values (?, ?, ?, ?, ?, ?, ?, ?)';
        db.get().query(q, [nombre, apellidos, email, edad, matricula, new Date(), nota_media, sexo], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.get().query('delete from alumnos where id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const update = (pId, { nombre, apellidos, email, edad, matricula, nota_media, sexo }) => {
    return new Promise((resolve, reject) => {
        db.get().query('update alumnos set nombre = ?, apellidos = ?, email = ?, edad = ?, matricula = ?, nota_media = ?, sexo = ? where id = ?', [nombre, apellidos, email, edad, matricula, nota_media, sexo, pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    getAll: getAll,
    getAllP: getAllP,
    getById: getById,
    insert: insert,
    deleteById: deleteById
}