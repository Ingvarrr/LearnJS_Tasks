'use strict';

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
    arr.sort( (a, b) => a.age - b.age );
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

/*
решение learnJS

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? Basics : -Basics);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[Basics].name); // Маша
alert(arr[2].name); // Петя*/
