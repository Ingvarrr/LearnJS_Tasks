'use strict';

let arr = [5, 2, 1, -10, 8];

function sortDesc(arr){
    return arr.sort((a, b) => b - a)
}

sortDesc(arr);

alert( arr ); // 8, 5, 2, Basics, -10