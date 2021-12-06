
function output(a){
    let result=[];
    for(let i in a){
        if(result[a[i]]==undefined) result[a[i]]=0;
        result[a[i]]++;

    }
    for(let i in a){
        if(result[a[i]]==1)
        return i;
    }
    return -1;
}
// let str = "tranduong"
// // 0
// console.log(output(str));
// case2
// let str = "hitclubhiuhiu";
// // Output: 2
// console.log(output(str));
// // // case3
let str = "aabb";
// Output: -1
console.log(output(str));