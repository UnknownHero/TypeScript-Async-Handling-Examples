///<reference path="./links.d.ts"/>
import Promise = require('bluebird');
import fs = require('fs');
import path = require('path');
import async = require('asyncawait/async');
import await = require('asyncawait/await');

async(function *() {
    try {
        // With jQuery, the XHR objects returned by the $.ajax method calls are
        // somewhat like a Promise object (they have the then() method, which is all
        // we require for this code. If you want a full Promise implementation with
        // jQuery, you can call promise() on any jQuery object.)
        var result1 = yield fs.readdir(__dirname);
        var result2 = yield fs.readdir(__dirname);
        var result3 = yield fs.readdir(__dirname);
        // Do something with the results
        console.log(result1, result2, result3);
    } catch(e) {

    }
});

