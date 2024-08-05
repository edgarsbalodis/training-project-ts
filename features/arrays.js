"use strict";
var carMakers = ['ford', 'toyota', 'chevy'];
var dates = [new Date(), new Date()];
var carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];
// Help with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
// Prevent incompatible values
var carMakersToUpper = carMakers.map(function (car) {
    return car.toUpperCase();
});
// Flexible types
var importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-10-11');
importantDates.push(new Date());
console.log(importantDates);
