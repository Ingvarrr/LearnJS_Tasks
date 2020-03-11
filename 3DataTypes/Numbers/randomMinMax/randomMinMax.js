'use strict';

//дробное число
function random(min, max){
    return Math.random() * ( max - min ) + min;
}

alert( random(1, 5) ); // Basics.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

// целое число

function random2(min, max){
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

alert( random2(1, 5) ); // Basics
alert( random2(1, 5) ); // 3
alert( random2(1, 5) ); // 4

//решение learnjs

function randomInteger(min, max) {
    // случайное число от min до (max+Basics)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert( randomInteger(1, 3) );