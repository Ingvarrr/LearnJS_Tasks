'use strict';

let ask = (confirm("Вы согласны?"))?
    () => alert("Вы согласились."):
    () => alert("Вы отменили выполнение.");

ask();

function ask2(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask2(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

let ask3 = (question, yes, no) => confirm(question) ? yes() : no();

ask3(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);