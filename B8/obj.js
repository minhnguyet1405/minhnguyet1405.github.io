// const person = {
//     name: "nguyet",
//     age:19,
//     sayHi: function(){
//         console.log("Hi");
//     }
// };
// //factory function
// const createPerson=function(name,age){
//     return{
//         name,
//         age,
//         sayHi(){
//             console.log("Hi");
//         },
//     };
// };
// const duo=createPerson("nguyet",19)

// // constructor function
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// const person=new Person("duo",20)
// person.name;
// person["name"];

// const x={
//     a: 1,
//     b: 2,
// };
// x.c=3;
// delete x.b;
// console.log(x);
//6.function are object
// console.log(typeof Person)
//literal syntax
// let str=``
// let n=1
//constructor function
// let n= new Number(1);
//7.loop 
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// const person = new Person("duo",20)
//lay key va value
// for(const key of Object.entries(person)){
//     console.log(key);
// }
// for(const value of Object.values(person)){
//     console.log(value);
// }


//copy 
const obj={
    name:"duo",
    age:19
};
// c1
// const another={};
// for(let key in obj){
//     another[key]=obj[key];
// }
// console.log(another);
// c2
const another=Object.assign({},obj);
console.log(another)