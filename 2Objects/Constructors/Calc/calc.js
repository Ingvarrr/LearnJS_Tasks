'use strict';

function Calculator( firstNumb, secondNumb ){

    this.read = function () {
        this.firstNumb = +prompt("Введите первое число", "0");
        this.secondNumb = +prompt("Введите первое число", "0");
    }

    this.sum = function() {
        return this.firstNumb + this.secondNumb;
    }

    this.mul = function () {
        return this.firstNumb * this.secondNumb;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );