'use strict';

function camelize(str) {
    let tempArray = str.split('');

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] === "-" && i !== tempArray.length){
            tempArray[i+1] = tempArray[i+1].toUpperCase();
        }
    }

    return tempArray.filter(item => item !== "-").join('');
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

/* решение learnJS
function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(Basics)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}*/
