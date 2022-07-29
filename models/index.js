const Travelers = require("./travelers");
const Locations = require("./locations");
const Trips = require("./trips");

Travelers.hasMany(Locations, {
    foreignKey: "locations_id",
    uniqueKey: false,
});

Locations.hasMany(Travelers, {
    foreignKey: "travelers_id",
    uniqueKey: false,
});

Trips.belongsTo(Travelers, {
    foreignKey: "travelers_id",
    uniqueKey: false,
});

module.exports = { Travelers, Locations, Trips };

