'use strict';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function maxSalary(obj) {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) return null;

    let arr = Object.values(obj);
    let maxSalary = Math.max.apply(null, arr);

    for (let [key, value] of Object.entries(obj)){
        if (value === maxSalary){
            return key;
        }
    }
}

alert(maxSalary(salaries));

//All employees with max salary are returned
/*
let salaries = {
   "John": 100,
    "Pete": 300,
    "Mary": 250
};

function maxSalary(obj) {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) return null;

    let maxSalaryNames = [];
    let arr = Object.values(obj);
    let maxSalary = Math.max.apply(null, arr);

    for (let [key, value] of Object.entries(obj)){
        if (value === maxSalary){
            maxSalaryNames.push(key);
        }
    }
    return maxSalaryNames;
}

alert(maxSalary(salaries));*/
