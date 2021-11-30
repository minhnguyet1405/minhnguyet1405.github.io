//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
const regexEmail=/[\w]+\@gmail\.com/g;
console.log(textEmail.match(regexEmail));

// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
const regexPhone=/[0-9]{10}/g;
console.log(textPhone.match(regexPhone));