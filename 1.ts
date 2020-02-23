import add from './v'

console.log(add(3,4))
export interface Person{
    name:string;
    age:number;
}

const a=function(p:Person){
    console.log(p)
}

export default a