'use strict';

function getSecondsToday() {
    let today = new Date();
    let todayMidnight = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        0,0,0,0);
    return Math.round((today - todayMidnight) / 1000);
}

alert(getSecondsToday());