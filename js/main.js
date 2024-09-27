//Bài tập 1
//Bước 1: input: đã có sẵn lương cơ bản = 100000, nhập số ngày
//Bước 2: process:lương nhân viên = số ngày (được nhập) *100000
//Bước 3: output: hiển thị số lương đã tính
let name = prompt("Nhập tên nhân viên");
let day = prompt("Nhập số ngày làm");
let base = 100000;

let wage = +day * +base;

console.log(name, ", làm được ",day," ngày, có lương: ", wage);


//Bài tập 2
//Bước 1: input: nhập vào 5 số thực
//Bước 2: process:trung bình 5 số thực = (num1 + num2 + num3 + num4 + num5)/5
//Bước 3: output: hiển thị số trung bình đã tính

let num1= prompt("Nhập số thực thứ nhất: ");
let num2= prompt("Nhập số thực thứ hai: ");
let num3= prompt("Nhập số thực thứ ba: ");
let num4= prompt("Nhập số thực thứ tư: ");
let num5= prompt("Nhập số thực thứ năm: ");

let average = (num1*1 + num2*1 + num3*1 + num4*1 + num5*1)/5;

console.log('Trung bình 5 số vừa nhập là ', average);

//Bài tập 3
//Bước 1: input: nhập vào tỷ lệ quy đổi USD sang VND và nhập vào số tiền USD cần đổi
//Bước 2: process:tiền sau khi đổi = tiền USD*tỉ lệ quy đổi USD-VND
//Bước 3: output: hiển thị tiền sau khi đổi

let convRate = prompt("Nhập vào tỷ lệ quy đổi USD thành VND: ");
let monUSD = prompt("Nhập vào số tiền USD cần đổi: ");

let monVND = +convRate * +monUSD;

console.log("Số tiền VND sau khi đổi là: ", monVND);

//Bài tập 4
//Bước 1: input: nhập vào chiều dài và chiều rộng hình chữ nhật
//Bước 2: process:tính chu vi bằng = (chiều dài + chiều rộng)*2, tính diện tích bằng = chiều dài*chiều rộng
//Bước 3: output: hiển thị chu vi và diện tích 

let length = prompt("Nhập vào chiều dài hình chữ nhật: ");
let width = prompt("Nhập vào chiều rộng hình chữ nhật: ");

let perimeter = (1*length+1*width)*2;
let area = +length*+width;
console.log('Chu vi : ', perimeter);
console.log('Diện tích : ', area);