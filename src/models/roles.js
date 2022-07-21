const mongoose = require('mongoose');
const Schema = mongoose.Schema;

import { AdminSchema} from "./rolAdministrativo";
import { GeneralSchema} from "./rolGeneral";

const   RolesSchema = Schema({
    admin:  AdminSchema,
    general:  GeneralSchema
});


module.exports = mongoose.model<Roles>('AdminSchema', 'GeneralSchema', RolesSchema);
