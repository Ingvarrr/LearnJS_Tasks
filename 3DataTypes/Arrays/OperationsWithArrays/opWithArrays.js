"use strict";

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles.splice(Math.floor((styles.length - 1) / 2), 1, 'Классика');

alert(styles.shift());

styles.unshift('Рэп', 'Регги');

alert(styles);

/* learnjs решение

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - Basics) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");

 */