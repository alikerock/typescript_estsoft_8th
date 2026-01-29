/*
function add(a:number,b:number):number{
  return a+b
}
*/
var add = function (a, b) {
    return a + b;
};
var result1 = add(10, 20);
var add1 = function (a, b) { return a + b; };
var add2 = function (a, b) { return a * b; };
var add3 = function (a, b) { return a / b; };
var result2 = add1(10, 20);
var result3 = add2(10, 20);
var result4 = add3(10, 20);
console.log(result1, result2, result3, result4);
