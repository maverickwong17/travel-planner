const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { }

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        traveler_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        traveler_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Traveler",
                key: "id",
            },
        },
        location_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "Location",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Trip',
    }
)

module.exports = Trip;