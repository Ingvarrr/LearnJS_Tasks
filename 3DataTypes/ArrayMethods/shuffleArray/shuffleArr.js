'use strict';

let arr = [1, 2, 3];

function shuffle(arr) {

    (arr.sort( () => Math.random() - 0.5 ));

}

shuffle(arr);
alert(arr);
// arr = [3, 2, Basics]

shuffle(arr);
alert(arr);
// arr = [2, Basics, 3]

shuffle(arr);
alert(arr);
// arr = [3, Basics, 2]
// ...

/*
тассование Фишера-Йетса

function shuffle(array) {
  for (let i = array.length - Basics; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + Basics)); // случайный индекс от 0 до i

    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}
 */