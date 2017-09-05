'use strict';

function countInversionsBruteForce(array) {
    let inversions = 0;

    for (let i=0, len = array.length; i < len; i++) {
        for (let j=i+1; j < len; j++) {
            if (array[i] > array[j]) {
                inversions++;
            }
        }
    }

    return inversions;
}

function sortAndCountInversions(array, low = 0, high = array.length - 1) {
    const len = high - low + 1;

    if (len === 1) {
        return 0;
    }
    
    const mid = low + ~~((len-1)/2),
          x = sortAndCountInversions(array, low, mid),
          y = sortAndCountInversions(array, mid+1, high),
          z = mergeAndCountSplitInversions(array, low, mid, high);

    return x + y + z;
}

function mergeAndCountSplitInversions(array, low, mid, high) {
    let leftArray = array.slice(low, mid+1),
        rightArray = array.slice(mid+1, high+1),
        leftPos = 0,
        rightPos = 0,
        leftLength = leftArray.length,
        inversions = 0;

    for (let i=low; i <= high; i++) {
        let leftX = leftArray[leftPos],
            rightX = rightArray[rightPos];

        if ((leftX !== undefined && rightX === undefined) || leftX <= rightX) {
            array[i] = leftX;
            leftPos++;
        }
        else if ((leftX === undefined && rightX !== undefined) || leftX > rightX) {
            array[i] = rightX;
            rightPos++;

            inversions += (leftLength - leftPos);
        }
    }

    return inversions;
}

let a = [1, 3, 5, 2, 4, 6],
    b = [6, 5, 4, 3, 2, 1];

console.log(countInversionsBruteForce(a));
console.log(a.toString());
console.log(countInversionsBruteForce(b));
console.log(b.toString());

console.log(sortAndCountInversions(a));
console.log(a.toString());
console.log(sortAndCountInversions(b));
console.log(b.toString());