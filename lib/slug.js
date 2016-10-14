// LICENSE : MIT
"use strict";
var slug = require("slug");
module.exports = function(string) {
    const splitComma = string.split(/[,、]/).join(" ");
    return slug(splitComma, {
        remove: null,
        lower: true
    });
};