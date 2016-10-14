// LICENSE : MIT
"use strict";
var assert = require("assert");
var slug = require("../lib/slug");
// Test
assert.equal(slug("aaa-bbb"), "aaa-bbb");
assert.equal(slug("日本語-bbb"), "-bbb");
assert.equal(slug("JS 1.0、Web 2.0"), "js-1.0-web-2.0");
assert.equal(slug("jQuery 2.2、lodash 4.0.0、IE8サポート終了"), "jquery-2.2-lodash-4.0.0-ie8");