inputSo_tien= prompt("Số tiền gửi");
inputLai_xuat= prompt("Lãi xuất");
inputSo_nam_gui= prompt("Số năm gửi")
let a= parseInt(inputSo_tien);
let b= parseInt(inputLai_xuat);
let c= parseInt(inputSo_nam_gui);
let r= a+(c*b/100);
document.write('Số tiền là '+r)
