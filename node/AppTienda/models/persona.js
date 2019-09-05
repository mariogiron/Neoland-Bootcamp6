const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    direccion: String,
    producto: { type: Schema.Types.ObjectId, ref: 'Producto' },
    compras: [{ type: Schema.Types.ObjectId, ref: 'Producto' }]
});

personaSchema.virtual('nombre_completo').get(function () {
    return this.nombre + ' ' + this.apellidos;
});

// pers.nombre_completo = "Pepe Antunez"
personaSchema.virtual('nombre_completo').set(function (value) {
    let split = value.split(" ");
    this.nombre = split[0];
    this.apellidos = split[1];
});

module.exports = mongoose.model('persona', personaSchema);