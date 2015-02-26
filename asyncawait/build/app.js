///<reference path="./links.d.ts"/>
var Promise = require('bluebird');
var fs = require('fs');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
// Return the number of files in the given directory
var countFiles = async(function (dir) {
    var fsPromise = Promise.promisifyAll(fs);
    var files = await(fsPromise.readdirAsync(dir));
    return files.length;
});
countFiles(__dirname).then(function () {
    console.log(arguments);
});
console.log('!!');
//# sourceMappingURL=app.js.map