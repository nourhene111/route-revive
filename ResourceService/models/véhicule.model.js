const { Model, DataTypes, Sequelize } = require('sequelize');

const VEHICULE_TABLE = 'vehicules';

class Vehicule extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: VEHICULE_TABLE,
            modelName: 'Vehicule',
            timestamps: true
        }
    }
} 

const VehiculeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'name'
    },
    
    description:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'description'
    } ,
    matricule:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'matricule'
    },
    status:{
        allowNull: true,
        type: DataTypes.ENUM('Pending', 'In Breakdown', 'On Mission'),
        field: 'status'
    } 
     
}
  
module.exports = { Vehicule, VehiculeSchema };