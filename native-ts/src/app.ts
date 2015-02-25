///<reference path="./links.d.ts"/>

async function startup() {

   setTimeout(function(){

       console.log("Timeout end");

   },1000);
}

console.log("Start");
await startup();
console.log("End");