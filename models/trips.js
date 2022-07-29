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
                model: "travelers",
                key: "id",
            },
        },
        locations_id: {
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