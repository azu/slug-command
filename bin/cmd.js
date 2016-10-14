#!/usr/bin/env node
var concat = require('concat-stream');
var string = process.argv[2];
var slugC = require("../lib/slug");
if (process.argv[2]) {
    console.log(slugC(process.argv[2]));
} else {
    process.stdin.pipe(concat(function(buf) {
        var targetString = buf.toString('utf8');
        if (targetString == null || targetString.length === 0) {
            throw new Error("Usage: slug-command 'string for slug.'");
        }
        console.log(slugC(targetString));
    }));
}
