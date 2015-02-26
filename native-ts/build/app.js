///<reference path="./links.d.ts"/>
var __awaiter = this.__awaiter || function (gen) {
    function step(result) {
        while (true) {
            var done = result.done, value = result.value, then;
            if (done) return value;
            if (value && typeof (then = value.then) === "function")
                return then.call(value,
                    function(value) { return step(gen.next(value)) },
                    function(reason) { return step(gen["throw"](reason)) });
            result = gen.next(value);
        }
    }
    return step(gen.next());
};
var startup = function () {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(function* () {
            setTimeout(function () {
                console.log("Timeout end");
            }, 1000);
        }()));
    });
};
console.log("Start");
startup().then(function(){
    "use strict";
    console.log(arguments);
});
console.log("End");
//# sourceMappingURL=app.js.map