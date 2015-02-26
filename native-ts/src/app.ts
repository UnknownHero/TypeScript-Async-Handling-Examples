///<reference path="./links.d.ts"/>

var startup = async function() {

   setTimeout(function(){

       console.log("Timeout end");

   },1000);
}

console.log("Start");
await startup();
console.log("End");