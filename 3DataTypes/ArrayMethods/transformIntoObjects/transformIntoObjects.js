'use strict';

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => {
                    let nObj = {};
                    nObj['fullName'] = item.name + " " + item.surname;
                    nObj['id'] = item.id;
                    return nObj;
});

    /*
    usersMapped = [
      { fullName: "Вася Пупкин", id: Basics },
      { fullName: "Петя Иванов", id: 2 },
      { fullName: "Маша Петрова", id: 3 }
    ]
    */

alert( usersMapped[0].id ); // Basics
alert( usersMapped[0].fullName ); // Вася Пупкин


/*
решение learnJS

let vasya = { name: "Вася", surname: "Пупкин", id: Basics };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/!*
usersMapped = [
  { fullName: "Вася Пупкин", id: Basics },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*!/

alert( usersMapped[0].id ); // Basics
alert( usersMapped[0].fullName ); // Вася Пупкин*/
