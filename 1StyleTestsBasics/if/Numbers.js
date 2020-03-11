'use strict';

let numb = Number(prompt("Введите число", "0"));

if (numb > 0){
    alert(1);
} else if(numb <0){
    alert(-1);
} else if(numb === 0){
    alert(0);
}else{
    alert("Неверный ввод");
}