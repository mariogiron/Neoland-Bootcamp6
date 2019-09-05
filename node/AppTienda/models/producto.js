let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: String,
    precio: Number,
    departamento: String,
    activo: Boolean
});

productoSchema.methods.mismoDepartamento = function (callback) {
    this.model('Producto').find({ departamento: this.departamento }, callback)
}

productoSchema.statics.activos = function (estado, callback) {
    this.model('Producto').find({ activo: estado }, callback)
}

module.exports = mongoose.model('Producto', productoSchema);

