"use strict";
var times;
(function (times) {
    times[times["Barcelona"] = 0] = "Barcelona";
    times[times["Gr\u00EAmio"] = 1] = "Gr\u00EAmio";
    times[times["Bayern"] = 2] = "Bayern";
})(times || (times = {}));
let meusTimes = times.Barcelona;
console.log("Primeiro: ", times.Bayern, "\nSegundo: ", times.Barcelona);
//# sourceMappingURL=enum.js.map