'use strict';

let swapCount, comparisonCount;

function mergeSort(array, low = 0, mid = ~~(array.length / 2), high = array.length-1) {    
    if (high-low > 0) {
        mergeSort(array, low, ~~((low+mid)/2), mid);
        mergeSort(array, mid+1, ~~((high+mid)/2), high);
        merge(array, low, mid, high);
    }
}

function merge(array, low, mid, high) {
    let leftArray = array.slice(low, mid+1),
        rightArray = array.slice(mid+1, high+1),
        leftPos = 0,
        rightPos = 0;

    for (let i=low; i <= high; i++) {
        let leftX = leftArray[leftPos],
            rightX = rightArray[rightPos];

        comparisonCount++;
        if ((leftX !== undefined && rightX === undefined) || leftX <= rightX) {        
            swapCount++;
            array[i] = leftX;
            leftPos++;
        }
        else {
            comparisonCount++;
            if ((leftX === undefined && rightX !== undefined) || leftX > rightX) {
                swapCount++;
                array[i] = rightX;
                rightPos++;
            }
        }
    }
}

swapCount = 0; comparisonCount = 0;
let array = 'MERGESORTEXAMPLE'.split('');
mergeSort(array);
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);
console.log(`${array.join('')}\n`);

swapCount = 0; comparisonCount = 0;
array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
mergeSort(array);
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);
console.log(`${array.join('')}\n`);

swapCount = 0; comparisonCount = 0;
array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
mergeSort(array);
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);
console.log(`${array.join('')}\n`);