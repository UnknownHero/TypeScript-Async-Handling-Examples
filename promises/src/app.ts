///<reference path="./links.d.ts"/>
import PromiseModule = require("es6-promise");
import fs = require("fs");

var Promise = PromiseModule.Promise;

var p = new Promise<Object>((resolve, reject) => {
    fs.readdir("/asdasd", (error:any ,files : Object) => {
        if(error){
            reject(error);
        }else{
            resolve(files)
        }

    })
});

p.then((result: Object)=>{

    console.log(result);

}).catch(function(error){

    console.log(error);

});