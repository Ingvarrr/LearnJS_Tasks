'use strict';
//#Basics
function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function () {
        let userPromptNumb = +prompt("Введите число, " +
            "которое стоит добавить к текущему", "0");
        return this.value += userPromptNumb;
    }
}

let accumulator = new Accumulator(1); // начальное значение Basics

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений

//2
/*
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };

}

let accumulator = new Accumulator(Basics);
accumulator.read();
accumulator.read();
alert(accumulator.value);

*/