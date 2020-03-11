'use strict';

/* Set and spread syntax
function unique(arr) {
    let modArr = [...new Set(arr)];

    return [...new Set(arr)];
}*/

function unique(arr) {
    return arr.filter( (item, pos, array) => array.indexOf(item) === pos );
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O

/*
решение LearnJS

function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O*/
