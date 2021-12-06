// Câu 2: Cộng một đơn vị vào mảng số nguyên
function sum(digits){
    
    let a=(Number(digits.join(''))+1).toString().split('');
    let result=[];
    a.forEach(ele => {
        result.push(Number(ele))
    })
    return result;
}
// const digits = [1,2,3]
// // Output: [1,2,4]
// console.log(sum(digits))
// const digits = [0]
// // Output: [1]
// console.log(sum(digits))
const digits = [9]
// Output: [1,0]
console.log(sum(digits))

