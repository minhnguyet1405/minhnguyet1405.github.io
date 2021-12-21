function checkHoTen(){
    var hoTen = document.getElementById("hoten").value
    var regHoTen = /[a-zA-Z]/
    if(hoTen == ""){
        document.getElementById("error").innerText = 'Họ và tên không được để trống'
    }else{
        document.getElementById("error").innerText = ""
        for(var i = 0; i < hoTen.length; i++){
            if(!regHoTen.test(hoTen[i])){
                document.getElementById("error").innerText = 'Họ và tên chỉ gồm các chữ cái'
            }else{
                document.getElementById("error").innerText = ""
            }
        }
    }
}
function checkEmail(){
    var el = document.getElementById("email").value;
    var reg=/.+\@gmail\.com/;
    if(el== ""){
        document.getElementById("error1").innerText = 'Email không được để trống'
    }else{
        // document.getElementById("error1").innerText = ""
        if(!reg.test(el)){
            document.getElementById("error1").innerText = 'Email sai định dạng'
        }else{
            document.getElementById("error1").innerText = ""
        }
    }
}
function checkSDT(){
    var sdt = document.getElementById("sdt").value;
    if(sdt == ""){
        document.getElementById("error3").innerText = 'Số điện thoại không được để trống'
    }
}
function checkND(){
    var sdt = document.getElementById("nd").value;
    if(sdt == ""){
        document.getElementById("error2").innerText = 'Nội dung không được để trống'
    }
}