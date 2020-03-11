'use strict';

function getSecondsToTomorrow(){
    let today = new Date();
    let tomorrow = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() +1,
        );
    return Math.round((tomorrow - today) / 1000) ;
}

alert(getSecondsToTomorrow());

/*
LearnJS solution

function getSecondsToTomorrow() {
    let now = new Date();

    // завтрашняя дата
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // преобразуем в секунды
}*/
