var hong = { id: 1, name: '홍길동', role: 'member' }; //초기화
hong = { id: 2, name: '홍길동2', role: 'admin' }; //재할당
//const lee:User = {id:1,name:'이도령'} role 속성 누락, 에러
var kim = { id: 1, name: 'kim', email: 'kim@abc.com', role: 'member' };
var lee = { id: 1, name: '이도령' };
var frozen = { id: 10, name: '얼음', role: 'member' };
frozen = { id: 11, name: '얼음', role: 'member' }; //가능
var pub = { id: 1, name: 'kim' };
var userNoEmail = { id: 2, name: 'Lee', role: 'admin' };
var grouped = {
    admin: [],
    member: [],
};
function addUser(usergp, user) {
    usergp[user.role].push(user); //계산된(computed) 속성
}
addUser(grouped, { id: 1, name: '관리자1', role: 'admin' });
addUser(grouped, { id: 2, name: '관리자2', role: 'admin' });
addUser(grouped, { id: 1, name: '회원1', role: 'member' });
addUser(grouped, { id: 2, name: '회원1', role: 'member' });
console.log(grouped.admin);
console.log(grouped.member);
