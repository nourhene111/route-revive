const { Model, DataTypes, Sequelize } = require('sequelize');

const EQUIPEMENT_TABLE = 'equipements';

class Equipement extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: EQUIPEMENT_TABLE,
            modelName: 'Equipement',
            timestamps: true
        }
    }
}

const EquipementSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    },
    description: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'description'
    },
    status: {
        allowNull: true,
        type: DataTypes.ENUM('Pending', 'In Breakdown', 'On Mission'),
        field: 'status'
    },
    quantite: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'quantite'
    }
}

module.exports = { Equipement, EquipementSchema };