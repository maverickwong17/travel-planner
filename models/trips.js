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
        trips_budget: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        travelers_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        travelers_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "traveler",
                key: "id",
            },
        },
        locations_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "location",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip',
    }
)

module.exports = Trip;