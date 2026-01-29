"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
function wrap(value) {
    return [value];
}
/** Q1. 출력 예측하기
 *  아래 콘솔의 실행 결과를 주석으로 적어보자.
 */
var q1a = identity("Hello");
var q1b = identity(2025);
var q1c = identity(true);
var q1d = identity(["TS", "JS", "Node"]);
console.log("Q1-a:", q1a); // "Hello"
console.log("Q1-b:", q1b); // 2025
console.log("Q1-c:", q1c); // true
console.log("Q1-d:", q1d); // ["TS", "JS", "Node"]
/** Q2. 타입 추론
 *  다음 변수들의 타입을 주석으로 적어보자.
 */
var q2a = identity(10); // 타입은 ? number
var q2b = wrap("abc"); // 타입은 ? string[]
var q2c = wrap(123); // 타입은 ? number[]
/* 힌트) identity(10)는 T가 무엇으로 추론되는가?
 *      wrap("abc")의 반환 타입은? // ["abc"]
 */
/** Q3. 컴파일 오류 찾기
 *  아래 중 컴파일 오류가 나는 줄을 찾아 주석으로 표시하라.
 */
// const q3a = identity<number>("123");
var q3b = identity(["a", "b"]);
var q3c = wrap(false);
/** Q4. 제네릭 함수 작성
 *  인자로 받은 값을 2중 배열로 감싸서 반환하는 함수 wrapTwice<T>를 작성하라.
 *  예) wrapTwice(10) -> [[10]]
 */
function wrapTwice(value) {
    // ??? 구현
    return [[value]];
}
console.log("Q4:", wrapTwice(10));
/** Q5. 제약 조건 with keyof
 *  객체와 키를 받아 해당 값을 반환하는 getProp<T, K extends keyof T>를 완성하라.
 */
function getProp(obj, key) {
    // ??? 구현 (obj에서 key에 해당하는 값을 반환)
    return obj[key];
}
var user = { id: 1, name: "Kim" };
console.log("Q5:", getProp(user, "id")); // 1
console.log("Q5:", getProp(user, "name")); // 'Kim'
/** Q6. 조건부 로직 + 타입가드
 *  배열이면 길이를, 아니면 그대로 값을 반환하는 함수 toLengthOrSelf<T>를 작성하라.
 *  힌트) Array.isArray(대상) 사용
 */
function toLengthOrSelf(value) {
    if (Array.isArray(value)) {
        return value.length; // 배열 길이
    }
    return value; // 원래 값
}
console.log("Q6-a:", toLengthOrSelf([1, 2, 3])); // Q6-a:3
console.log("Q6-b:", toLengthOrSelf("abc")); // Q6-b:abc
/** Q7. 제네릭 클래스
 *  타입 안전한 스택 Stack<T>를 작성하라: push, pop, size
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.buf = [];
    }
    Stack.prototype.push = function (item) {
        this.buf.push(item);
    };
    //마지막 원소를 제거한다.
    Stack.prototype.pop = function () {
        return this.buf.pop();
    };
    //배열의 길이를 구한다.
    Stack.prototype.size = function () {
        return this.buf.length;
    };
    return Stack;
}());
var s = new Stack();
s.push(1);
s.push(2);
console.log("Q7-size:", s.size()); // 2
console.log("Q7-pop:", s.pop()); // 2
console.log("Q7-pop:", s.pop()); // 1
console.log("Q7-pop:", s.pop()); // undefined
/** Q8. 두 객체를 합치는 제네릭 merge<A, B>
 *  반환 타입은 A & B (교차 타입)이어야 한다.
 */
function merge(a, b) {
    // ??? 구현 (스프레드 연산자로 합치기)
    return __assign(__assign({}, a), b);
}
var merged = merge({ id: 1 }, { name: "Kim" });
/* merged 타입은 무엇인가? 주석으로 적어보자. */
console.log("Q8:", merged);
/** Q9. O/X 퀴즈 (주석으로 답하라)
 *  1) identity 함수에서 T는 호출 시점에 명시하거나, 컴파일러가 추론할 수 있다. (O)
 *  2) wrap<string>(123)은 컴파일된다. (X)
 *  3) getProp<User, "id">(user, "name")은 타입 오류다. (X)
 *  4) merge의 반환 타입 A & B는 두 타입을 모두 만족하는 교차 타입이다. (O)
 */
/** Q10. 응용: 제네릭 기본값
 *  T의 기본 타입을 string으로 두는 함수 defaulted<T = string>(v: T): T를 선언하고,
 *  인자 없이 호출 시 T가 string으로 간주됨을 확인하라.
 */
function defaulted(v) {
    return v;
}
var q10a = defaulted("hello"); // T는 hello
var q10b = defaulted(123); // T는 123
console.log("Q10-a:", q10a);
console.log("Q10-b:", q10b);
