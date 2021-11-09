"use strict";
const tupla = [1, 'abc', true];
function tuplaParam1(a, b, c, d) {
    console.log(`${a}, ${b}, ${c}, ${d}`);
}
tupla.push(2021);
tuplaParam1(...tupla);
//# sourceMappingURL=spreadComTuplas.js.map