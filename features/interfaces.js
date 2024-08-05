"use strict";
var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name);
    }
};
var printVehicle = function (vehicle) {
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Broken? ".concat(vehicle.broken));
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
