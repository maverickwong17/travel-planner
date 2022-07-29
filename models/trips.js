const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model { }

Trips.init(
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
                model: "travelers",
                key: "id",
            },
        },
        location_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "locations",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
    }
)

module.exports = Trips;