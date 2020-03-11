'use strict';

function sumInput() {
    let arr = [];
    let sum = 0;

    while (true){
        let input = prompt("Введите число");
        if (input === !Number || input === null || input === '') break;
        arr.push(Number(input));
    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

sumInput();

/*решение Learn JS

function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("Введите число", 0);

        // Прекращаем ввод?
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert( sumInput() );

 */