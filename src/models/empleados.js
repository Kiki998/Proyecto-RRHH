const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadoSchema = Schema({
    nombre:  {type: String, required: true},
    unidad:  {type: String, required: true},
    cargo:  {type: String, required: true},
    edad:  {type: Number, required: true},
    cumpleaños:  {type: Date, required: true},
    imagen: {type: String, required: false},
    tipoEmpleado: {type: String, required: true}

});


module.exports = mongoose.model('Empleado', EmpleadoSchema);
