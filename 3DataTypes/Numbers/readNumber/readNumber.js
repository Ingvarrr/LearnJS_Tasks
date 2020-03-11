'use strict';

function readNumber() {
    while (true){
        let num = prompt( "Введите числовое значение" );

        if ( isFinite(parseInt ( (num) ) ) ){
            alert(num);
            break;
        }

        if (num === null){
            alert(null);
            break;
        }
    }
}

readNumber();

/*#2
function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);
*/