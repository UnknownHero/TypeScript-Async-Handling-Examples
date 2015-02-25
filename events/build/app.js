///<reference path="./links.d.ts"/>
var ee2 = require("eventemitter2");
var TestEvents;
(function (TestEvents) {
    TestEvents[TestEvents["EndGo"] = 0] = "EndGo";
})(TestEvents || (TestEvents = {}));
;
var Test = (function () {
    function Test() {
        this.event = null;
        this.event = new ee2.EventEmitter2();
    }
    Test.prototype.go = function (time) {
        if (time === void 0) { time = 1000; }
        var that = this;
        setTimeout(function () {
            console.log('Timeout end');
            that.event.emit(0 /* EndGo */.toString());
        }, time);
    };
    return Test;
})();
var instance = new Test();
console.log("Start");
instance.event.on(0 /* EndGo */.toString(), function () {
    console.log("End");
});
instance.go();
//# sourceMappingURL=app.js.map