#!/usr/bin/env node
var concat = require('concat-stream');
var slug = require("slug");
var string = process.argv[2];
var input = string && string !== '-'
        ? fs.createReadStream(process.argv[2])
        : process.stdin
    ;
input.pipe(concat(function (buf) {
    var targetString = buf.toString('utf8');
    if (targetString == null || targetString.length === 0) {
        throw new Error("Usage: slug-command 'string for slug.'");
    }
    console.log(slug(targetString, {lower: true}));
}));