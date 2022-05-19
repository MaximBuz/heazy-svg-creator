"use strict";
exports.__esModule = true;
exports.zip = void 0;
function zip(a, b) {
    return a.map(function (k, i) { return [k, b[i]]; });
}
exports.zip = zip;
