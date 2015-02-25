///<reference path="./links.d.ts"/>
import ee2 = require("eventemitter2");


enum TestEvents { EndGo };

class Test {

    public event: ee2.EventEmitter2 = null;

    constructor(){
        this.event = new ee2.EventEmitter2();
    }

    public go(time:number = 1000){
        var that = this;
        setTimeout(function(){
            console.log('Timeout end');
            that.event.emit(TestEvents.EndGo.toString())
        },time);
    }

}

var instance = new Test();

console.log("Start");
instance.event.on(TestEvents.EndGo.toString(), () => {
    console.log("End");
});

instance.go();