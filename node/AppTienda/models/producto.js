let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: String,
    precio: Number,
    departamento: String,
    activo: Boolean
});

module.exports = mongoose.model('producto', productoSchema);