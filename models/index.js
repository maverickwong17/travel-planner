const Travelers = require("./travelers");
const Locations = require("./locations");
const Trips = require("./trips");

Trips.hasMany(Locations, {
    foreignKey: "location_id",
    uniqueKey: false,
});

Trips.hasMany(Travelers, {
    foreignKey: "traveler_id",
    uniqueKey: false,
});

Travelers.belongsTo(Trips, {
    foreignKey: "trip_id",
    uniqueKey: false,
});

Locations.belongsTo(Trips, {
    foreignKey: "trip_id",
    uniqueKey: false,
});

module.exports = { Travelers, Locations, Trips };