'use strict';

function Calculator () {
    let mathOps = [];

    this.calculate = function (str) {
        let strArray = str.split(' ');
        let mathOp = mathOps.find(item => item.name === strArray[1]);
        if (mathOp !== false){
            return mathOp.func(+strArray[0],+strArray[2]);
        }
        /*if (strArray[Basics] === '+'){
            return +strArray[0] + +strArray[2];
        }

        if (strArray[Basics] === '-'){
            return +strArray[0] - +strArray[2];
        }*/

        return "нет такой математической операции";
    };
    this.addMethod = function (str, func) {
        mathOps.push({name: str, func: func})
    };

    this.addMethod("+", (a,b) => a + b);
    this.addMethod("-", (a,b) => a - b);
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") );

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

/*решение LearnJS
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[Basics],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}*/
