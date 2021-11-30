
function Change(str){
  str=str.trim().toLowerCase();
  str=str.replace(/\s+/g,' ');//xoa khoang trang o giua
  str=str.replace(/\d/g,'');//xoa ki tu so 
  str=str.split(' ').map(item =>{
    return item.charAt(0).toUpperCase()+item.slice(1);
  }).join(' ');
  return str;
}

const case1 = "    hOang Bui   ";
// -> Hoang Bui
console.log(Change(case1));

const case2 = " hOANG      BUI   hOang     ";
console.log(Change(case2));

const case3 = "23traN    dUOng23     ";
console.log(Change(case3));