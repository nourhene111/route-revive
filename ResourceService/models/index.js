const { Equipe, EquipeSchema } = require('./équipe.model');
const { Equipement, EquipementSchema } = require('./équipement.model');
const { Vehicule, VehiculeSchema } = require('./véhicule.model');

function setupModels(sequelize) {
    Equipe.init(EquipeSchema, Equipe.config(sequelize));
    Equipement.init(EquipementSchema, Equipement.config(sequelize));
    Vehicule.init(VehiculeSchema, Vehicule.config(sequelize));
}

module.exports = setupModels;