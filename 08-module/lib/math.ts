export const add = (a:number,b:number)=> a+b;
export const sub = (a:number,b:number)=> a-b;

// export default function mul(a:number,b:number){
//   return a*b;
// }
export default class Calculator{  
  constructor(private init = 0){}
  add(n:number){
    this.init += n;
    return this.init
  }
  value(){return this.init}
}