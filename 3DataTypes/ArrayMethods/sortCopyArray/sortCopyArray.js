'use strict';

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    let sortedArr = arr.slice();
    return sortedArr.sort(
        (a, b) =>
            a.localeCompare(b, 'en', {sensitivity: 'base'}));
}

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

/*решение LearnJS
function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );*/
