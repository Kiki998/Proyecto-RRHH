const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PermisosSchema = Schema({
    tipoPermiso:  {type: String, required: true},
    fechaPermiso:  {type: Date, required: true},
    cantidadHoras:  {type: Number, required: true},
    motivo:  {type: String, required: true},

});


module.exports = mongoose.model('Permisos', PermisosSchema);
