'use strict';

function findSecondLargest(a) {
    const n = a.length;

    if (n === 2) {
        return buildResponse(a[0], a[1]);
    }

    const middle = ~~(n/2);
    let largests = [findSecondLargest(a.slice(0, middle)).largest, findSecondLargest(a.slice(middle, n+1)).largest];
    return buildResponse(largests[0], largests[1]);
}

function buildResponse(x, y) {
    let result = x > y ? { largest: x, secondLargest: y } : { largest: y, secondLargest: x };
    return result;
}

let a = [5, 3, 8, 4, 1, 6, 2, -4];
console.log(findSecondLargest(a).secondLargest);

let b = [5, 23, 78, 64, 31, 6, 92, -4, 15, 3, 48, 4, 51, 86, 2, -24];
console.log(findSecondLargest(b).secondLargest);