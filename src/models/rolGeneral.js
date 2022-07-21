const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeneralSchema = Schema({
    usuario:  {type: String, required: true},
    nombre:  {type: String, required: true},
    correo:  {type: String, required: true},
    contraseña:  {type: String, required: true},

});


module.exports = mongoose.model('General', GeneralSchema);
