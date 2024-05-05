const { Model, DataTypes, Sequelize } = require('sequelize');

const EQUIPE_TABLE = 'equipes';

class Equipe extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: EQUIPE_TABLE,
            modelName: 'Equipe',
            timestamps: true
        }
    }
} 

const EquipeSchema = {
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
    membre: {
        allowNull: true,
        type: DataTypes.STRING, // Use STRING data type for array of strings
        field: 'membre',
        defaultValue: '[]', // Default value for an empty array
        get() {
            const value = this.getDataValue('membre');
            return value ? JSON.parse(value) : [];
        },
        set(value) {
            this.setDataValue('membre', JSON.stringify(value));
        }
    },

    status:{ 
        allowNull: true,
        type: DataTypes.ENUM('Pending', 'On Mission'),
        field: 'status'
    } 
}
  
module.exports = { Equipe, EquipeSchema };