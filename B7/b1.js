function count(a){
    let result={};
    for(let i in a){
        if(result[a[i]]==undefined) result[a[i]]=0;
        result[a[i]]++;

    }
    for(let i in result){
        if(result[a[i]]==1)
        return i;
    }
    return -1;
}
console.log("Case 1")
var nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
console.log(count(nums))
//Case 2
console.log("Case 2 ")
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
console.log(count(nums1));
//Case 3
console.log("Case 3")
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
console.log(count(nums2));
