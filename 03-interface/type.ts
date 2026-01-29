// 타입 생성
// type 타입명 = { ... }
type Point = {
  x:number;
  y:number;
}
const p1:Point = {x:10, y:20};

// 타입 별칭 확장
type Point3D = Point & {z:number};//기존 point 타입 + z:number
const p2:Point3D = {x:10, y:20, z:30};

// 튜블(tuple) - 값의 형태, 길이 타입지정
let arr:string[] = ['a','b']; //길이의 제한 없는 일반적인 배열

let tuple1:[string,string] 
tuple1 = ['a', 'b']; //이상 없음
//tuple1 = ['a', 'b', 'c']; //오류

let tuple2:[string,number] 
tuple2 = ['a', 100]; //이상 없음
//tuple2 = ['a', '100']; //오류


// 튜플과 타입 별칭 (type) 활용
type UserInfo = [number, string, boolean];
const userA:UserInfo = [1,'홍길동',true];
//const userB:UserInfo = ['1','홍길동',true]; 에러







