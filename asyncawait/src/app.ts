///<reference path="./links.d.ts"/>
import Promise = require('bluebird');
import fs = require('fs');
import path = require('path');
import async = require('asyncawait/async');
import await = require('asyncawait/await');


// Return the number of files in the given directory
var countFiles = async (function(dir) {
    var fsPromise:any = Promise.promisifyAll(fs);
    var files = await(fsPromise.readdirAsync(dir));

    return 1;
});


countFiles(__dirname).then(function(){

    console.log(arguments);

});