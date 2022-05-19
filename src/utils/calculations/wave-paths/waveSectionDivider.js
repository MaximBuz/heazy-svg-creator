"use strict";
exports.__esModule = true;
exports.getCoordinates = void 0;
var zipArray_1 = require("../../zipArray");
function getCoordinates(sections, width, waveSize) {
    var equal = width / sections;
    var x = [];
    var y = [];
    for (var cut = 0; cut <= sections; cut++) {
        x.push(equal * cut);
        y.push(waveSize);
    }
    return (0, zipArray_1.zip)(x, y);
}
exports.getCoordinates = getCoordinates;
console.log(getCoordinates(4, 600, 300));
