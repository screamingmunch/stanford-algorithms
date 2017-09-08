'use strict';

/*
You are given a sorted (from smallest to largest) array A of n distinct integers which can be positive, negative, or zero. You want to decide whether or not there is an index i such that A[i] = i. Design the fastest algorithm that you can for solving this problem.
*/

function findIndexEqualsToValue(array, low = 0, high = array.length - 1) {
    const n = high - low + 1,
          middle = ~~((low + high)/2),
          val = array[middle];    
    
    if (array[middle] === middle) {
        return true;
    }

    if (n > 1) {
        if (array[middle] > middle)  {
            return findIndexEqualsToValue(array, low, middle-1);
        }
        else {
            return findIndexEqualsToValue(array, middle+1, high);
        }
    }

    return false;
}

let a = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
console.log(findIndexEqualsToValue(a));

let b = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 9, 10];
console.log(findIndexEqualsToValue(b));

let c = [-5, -4, -3, -2, -1];
console.log(findIndexEqualsToValue(c));

let d = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(findIndexEqualsToValue(d)); 

let e = [-5, -4, -3, -2, -1, 5, 10];
console.log(findIndexEqualsToValue(e)); 