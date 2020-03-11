'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let jsonObj = JSON.stringify(user);

let fromJsonObj = JSON.parse(jsonObj);

alert(fromJsonObj);

/*
LearnJS Solution

let user = {
    name: "Василий Иванович",
    age: 35
};

let user2 = JSON.parse(JSON.stringify(user));*/
