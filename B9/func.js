function show(name){
    console.log("xin chao "+ name);
}
// express function
let showAge=function (age){
    console.log("ban "+age+" tuoi");
};
showAge(19);
// arrow function
let showFace = (face) =>{
    console.log("Mat ban "+face);
}
showFace("dz");

let sum = (a,b) => a + b;
console.log(sum(1,2));

let showNumber = a => a+1; //1 doi so
console.log(showNumber(1));