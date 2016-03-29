#!/usr/bin/env node
var concat = require('concat-stream');
var slug = require("slug");
var string = process.argv[2];
function slugC(string) {
    console.log(slug(string, {lower: true}))
}
if (process.argv[2]) {
    slugC(process.argv[2]);
} else {
    process.stdin.pipe(concat(function (buf) {
        var targetString = buf.toString('utf8');
        if (targetString == null || targetString.length === 0) {
            throw new Error("Usage: slug-command 'string for slug.'");
        }
        slugC(targetString);
    }));
}
