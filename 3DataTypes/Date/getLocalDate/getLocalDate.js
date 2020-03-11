'use strict';

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay (date){
    if (date.getDay() === 0) return 7;
    else return date.getDay();
}

alert( getLocalDay(date) );

//LearnJS решение отсутствует