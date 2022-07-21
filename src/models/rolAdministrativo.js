const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = Schema({
    usuario:  {type: String, required: true},
    contraseña:  {type: String, required: true},
});


module.exports = mongoose.model('Admin', AdminSchema);

