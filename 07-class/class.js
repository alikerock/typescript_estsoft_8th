"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(this.name));
    };
    return Person;
}());
//클래스 실행, 인스턴스(객체) 생성
var person1 = new Person('hong');
var person2 = new Person('kim');
person1.greet();
person2.greet();
var User = /** @class */ (function () {
    function User(id, nickname) {
        this.id = id;
        this.nickname = nickname;
    }
    User.prototype.intro = function () {
        return "user#".concat(this.id, "/nickname=").concat(this.nickname);
    };
    User.prototype.getNickName = function () {
        return this.nickname;
    };
    return User;
}());
var u = new User(1, '홍길동');
console.log(u.id); //public이기 때문에 id 접근 가능
//console.log(u.nickname);  nickname private, 외부 접근 x
console.log(u.intro()); //user#1/nickname=홍길동
console.log(u.getNickName()); //홍길동
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, nickname, level) {
        var _this = _super.call(this, id, nickname) || this; //부모클래스의 id, nickname 상속 받기
        _this.level = level;
        return _this;
    }
    Admin.prototype.showId = function () {
        return this.id;
    };
    return Admin;
}(User));
var admin = new Admin(2, '관리자', 10);
console.log(admin.id);
