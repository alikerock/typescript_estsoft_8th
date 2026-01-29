var value; //반드시 숫자만 할당
value = 123;
//value = '문자열' 오류
//let value:number = 123
//유니언 타입
var val; //둘중 하나를 할당
val = 123;
val = '문자';
//val = boolean; 오류
//함수 활용
function printLength(value) {
    if (typeof value === 'string') { //가드
        return value.length;
    }
    return value;
}
var result1 = printLength(123);
var result2 = printLength('abc');
console.log(result1, result2);
// 클래스, 인스턴스
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () { return '멍멍'; };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () { return '야옹'; };
    return Cat;
}());
function speak(animal) {
    if (animal instanceof Dog) { //객체의 이름을 구분
        return animal.bark();
    }
    else {
        return animal.meow();
    }
}
var dog = speak(new Dog());
var cat = speak(new Cat());
console.log(dog, cat);
function operate(vehicle) {
    if ('drive' in vehicle) { //변수명 vehicle객체에 drive 속성이 있으면
        vehicle.drive();
    }
    else {
        vehicle.sail();
    }
}
var myCar = {
    drive: function () { console.log('자동차가 달린다'); }
};
var myBoat = {
    sail: function () { return console.log('보트가 항해한다'); }
};
operate(myCar); //myCar.drive()와 동일, //자동차가 달린다
operate(myBoat); //myBoat.sail()와 동일, //보트가 항해한다
function logMessage(msg) {
    console.log(msg);
    //return msg; 에러
}
logMessage('안녕');
