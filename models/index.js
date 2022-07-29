const Traveler = require("./travelers");
const Location = require("./locations");
const Trip = require("./trips");

// Trip.hasMany(Location, {
//     foreignKey: "location_id",
//     uniqueKey: false,
// });

// Trip.hasMany(Traveler, {
//     foreignKey: "traveler_id",
//     uniqueKey: false,
// });

// Traveler.belongsTo(Trip, {
//     foreignKey: "trip_id",
//     uniqueKey: false,
// });

// Location.belongsTo(Trip, {
//     foreignKey: "trip_id",
//     uniqueKey: false,
// });

Traveler.belongsToMany(Location, {
    through: Trip, 
    uniqueKey: false,
})

Location.belongsToMany(Traveler, {
    through: Trip,
    uniqueKey: false,
})

module.exports = { Traveler, Location, Trip };