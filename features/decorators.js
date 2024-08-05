"use strict";
var Boat = /** @class */ (function () {
    function Boat() {
        this.color = 'red';
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return "This boat color is ".concat(this.color);
        },
        enumerable: false,
        configurable: true
    });
    // @logError
    Boat.prototype.pilot = function () {
        throw new Error();
        console.log('swish');
    };
    return Boat;
}());
function logError(target, key, desc) {
    // const method = desc.value;
    // desc.value = function() {
    //     try {
    //         method();
    //     } catch (e) {
    //         console.log('boat was sunk')
    //     }
    // }
}
new Boat().pilot();
