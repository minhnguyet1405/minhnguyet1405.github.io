// const sum=(a=1,b=0)=>a+b;
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4));

// const names={
//     name1: "dou",
//     name2: "hoang",
//     name3: "hung",
// };
// const {name1,name2,name3}=names;
// // console.log(name1,name2,name3);
// const person={
//     name: "nguyet",
//     age: 18,
// };

// const another=person;
// const another={};
// for(let key in person){
//     another[key]=person[key];
// }
// const another=Object.assign(person,{});
// spread operator
// const another={...person};
// const numbers=[1,2,3,4,5];
// const nums=[0,...numbers,6];
// console.log(nums);

// const sum=(num1,num2,num3) =>{
//     return num1+num2+num3;
// };
// console.log(sum(1,2,3));

// rest operator
const sum=(...numbers) =>{
    console.log("numbers: ",numbers);
    return numbers.reduce((acc,cur) => acc+ cur,0);
};
console.log(sum(1,2,3,4,5,6,7,8,9,10));