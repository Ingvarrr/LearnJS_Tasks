'use strict';

function pow(x,n) {
    x = +prompt("Введите число")
    do{
        n = +prompt("Введите степень числа (Basics или больше)")
    }while (n < 1);

    let pow = Math.pow(x,n);
    alert(`Результат возведения в степень: ${pow}`);
}

pow();