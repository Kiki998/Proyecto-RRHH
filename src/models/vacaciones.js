const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VacacionesSchema = Schema({
    fechaSolicitud:  {type: Date, default: Date.now},
    fechaInicio:  {type: Date, required: true},
    fechaFinal:  {type: Date, required: true},
    diasSolicitados: {type: Number, required: true}
});


module.exports = mongoose.model('Vacaciones', VacacionesSchema);
