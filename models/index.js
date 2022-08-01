const Traveler = require("./travelers");
const Location = require("./locations");
const Trip = require("./trips");

Traveler.belongsToMany(Location, {
    through: {
        model: Trip, 
        unique: false,
    },
})

Location.belongsToMany(Traveler, {
    through: {
        model: Trip,
        unique: false,
    },
})

module.exports = { Traveler, Location, Trip };