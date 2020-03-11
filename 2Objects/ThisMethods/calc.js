'use strict';

let calculator = {
    numb1: 0,
    numb2: 0,
    read() {
        this.numb1 = Number( prompt( "Введите первое число", '0' ));
        this.numb2 = Number( prompt( "Введите второе число", '0' ));
    },
    sum() {
        return this.numb1 + this.numb2;
    },
    mul() {
        return this.numb1 * this.numb2;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );