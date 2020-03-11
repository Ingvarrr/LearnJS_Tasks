'use strict';

function filterRange(arr, a, b) {
    let filteredArray = [];

    arr.
        map(item => {if ((a <= item) && (item <= b))
                    return filteredArray.push(item)});

    return filteredArray;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,Basics (совпадающие значения)

alert( arr ); // 5,3,8,Basics (без изменений)

/*решение learnJS
function filterRange(arr, a, b) {
    // добавлены скобки вокруг выражения для улучшения читабельности
    return arr.filter(item => (a <= item && item <= b));
}*/
