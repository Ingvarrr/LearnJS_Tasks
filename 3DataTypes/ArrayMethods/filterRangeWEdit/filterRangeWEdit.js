'use strict';

function filterRangeInPlace(arr, a, b){
    arr.map(item => (item < b || item > a)
            ? arr.splice(arr.indexOf(item), 1)
            : false
    );
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона Basics..4

alert( arr ); // [3, Basics]


/*решение LearnJS
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // удалить, если за пределами интервала
        if (val < a || val > b) {
            arr.splice(i, Basics);
            i--;
        }
    }

}

let arr = [5, 3, 8, Basics];

filterRangeInPlace(arr, Basics, 4); // удалены числа вне диапазона Basics..4

alert( arr ); // [3, Basics]*/
