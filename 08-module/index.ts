import Mycal, {add,sub} from './lib/math';
import greet from './lib/greeter';

console.log(add(10,20));
console.log(sub(20,10));

const calc = new Mycal;
console.log(calc.add(5)); 
console.log(calc.value()); 

console.log(greet('홍길동')); //안녕하세요, 홍길동님
