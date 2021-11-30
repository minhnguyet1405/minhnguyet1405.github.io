// Bài 2
// Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female
const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 4000 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
  ];
//1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id

function show(){
    
    console.log(users);
}
console.log("--------------Danh sach nguoi dung---------------------------------------")
show();

function add(){
    users.push({id: 5,name: "Minh Nguyet",age: 19,gender: "female",money: 2000});
    
}
add();
console.log("-----------Danh sach sau khi add------------------------------------------")
show();
console.log("--------------------------------------------------------------------------")
function Delete(){
    for(let i in users){
        if(users[i].id==4){
            users.splice(i,1);
        }
    }
}
Delete();
console.log("-----------Danh sach sau khi xoa-------------------------------------------")
show();
console.log("---------------------------------------------------------------------------");
function Update(){
    for(let i in users){
        if(users[i].id==1){
            users[i].name="Bui Viet Hoang";
            users[i].age=8;
            users[i].gender="female";
            users[i].money=5000;
        }
    }
}
Update();
console.log("-----------Danh sach sau khi update----------------------------------------")
show();
console.log("---------------------------------------------------------------------------")

//2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
console.log("----------------------Them 2 phan tu---------------------------------------");
users.push(
    {id: 6,name: "Dong",age: 20,gender: "male",money: 10000},
    {id: 7,name: "HaUI",age: 15,gender: "female",money: 1000},
)
console.log(users);
function statistical(){
    let dem1=0,dem2=0;
    for(let i in users){
        if(users[i].gender=="male")
            dem1++;
        if(users[i].age>15)
            dem2++;
    }
    console.log("Co " + dem1 +" nam");
    console.log("So nguoi co tuoi > 15 la : "+ dem2++);
}
statistical();

function Sum(){
    let s=0;
    for(let i in users){
        if(users[i].id%2==0){
            s+=users[i].money;
        }
    }
    console.log("Tong tien nhung nguoi co id chan la : "+ s);
    
}
Sum();
function check(){
    let max = 0;
    for(let i=1; i<users.length; i++) {
        if(users[i].money > users[max].money) {
            max = i;
        }
    }

    console.log("Nguoi giàu nhất la : ");
    console.log(users[max]);
    
    let min = 0;
    for(let i=1; i<users.length; i++) {
        if(users[i].money < users[min].money) {
            min = i;
        }
    }

    console.log("Nguoi nghèo nhất la : ");
    console.log(users[min]);

}
check();
function reserver(){
    for(let i in users){
        if(users[i].gender=="male")
            users[i].gender="female";
    }
    console.log(users);
}
console.log("----------------Danh sach sau khi thay doi---------------------------------------")
reserver();
console.log("---------------------------------------------------------------------------------")