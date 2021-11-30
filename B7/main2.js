let a=[1,2,3,4];
// a.pop();
// a.push(10);
// a.shift();
// a.unshift(0);
// console.log(a[i]);
// a.forEach((a)=>{
//     console.log(a);
// })
// function x2(num){
//     return num*2;
// };
// let result=[];
// function (){

// }
// function filterNumber(num){
//     return num>5;
// };
// console.log(a.filter(filterNumber));
function reduceNum(a,b){
    return a+b;

}
console.log(a.reduce(reduceNum,0));