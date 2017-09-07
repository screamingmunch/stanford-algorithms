'use strict';

function findMaximum(a, low = 0, high = a.length - 1) {
    const n = high - low + 1;

    if (n <= 2) {
        return Math.max(...a.slice(low, high+1));
    }

    const middle = ~~((low + high)/2);

    let rightMiddle, leftMiddle;
    if (middle > 0) {
        rightMiddle = middle;
        leftMiddle = middle-1;
    }
    else {
        rightMiddle = middle+1;
        leftMiddle = middle;
    }

    if (a[leftMiddle] < a[rightMiddle]) {
        return findMaximum(a, rightMiddle, high);
    }
    else {
        return findMaximum(a, low, leftMiddle);
    }
}

let a = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 12, 10, 8, 4, 0, -4 ];
console.log(findMaximum(a));

let b = [ 21, 23, 25, 17, 9, 1, -3, -15, -17, -112, -210, -218, -224, -300, -456 ];
console.log(findMaximum(b));

let c = [ 27, 23, 21, 17, 9, 1, -3, -15, -17, -112, -210, -218, -224, -300, -456 ];
console.log(findMaximum(c));

let d = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 24 ];
console.log(findMaximum(d));