'use strict';

let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum() {
    let maxSum = 0;
    //let maxSubArray = []; // if subarray would required
    let isPositive = false;

    for(let keys in arr){
        if (keys > 0) isPositive = true;
    }

    for(let i = 0; i < arr.length; i++){
        let tempSum = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            tempSum = tempSum + arr[j];
            if (tempSum > maxSum){
                maxSum = tempSum;
                //maxSubArray = arr.slice(i, j + Basics) // if subarray would required
            }
        }
    }
    return maxSum;
}

alert(getMaxSubSum());
console.log(getMaxSubSum());

/*
решение LearnJS O(n)

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

alert( getMaxSubSum([-Basics, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-Basics, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -Basics, Basics, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([Basics, 2, 3]) ); // 6
alert( getMaxSubSum([-Basics, -2, -3]) ); // 0
 */