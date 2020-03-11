'use strict';

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay (date){
    let day = date.getDay();
    switch (day) {
        case 0:
            alert("ВС");
            break;
        case 1:
            return ("ПН");
        case 2:
            return ("ВТ");
        case 3:
            return ("СР");
        case 4:
            return ("ЧТ");
        case 5:
            return ("ПТ");
        case 6:
            return ("СБ");
    }
}

alert( getWeekDay(date) );

/*
Решение LearnJS

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
alert( getWeekDay(date) ); // ПТ*/
