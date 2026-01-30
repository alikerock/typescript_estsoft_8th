"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./lib/math");
var greeter_1 = require("./lib/greeter");
console.log((0, math_1.add)(10, 20));
console.log((0, math_1.sub)(20, 10));
var calc = new math_1.default;
console.log(calc.add(5));
console.log(calc.value());
console.log((0, greeter_1.default)('홍길동')); //안녕하세요, 홍길동님
