'use strict';

function getLastDayOfTheMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    // date.setDate(date.getDay() - 1);
    return date.getDate();
}

alert(getLastDayOfTheMonth(2012, 1));