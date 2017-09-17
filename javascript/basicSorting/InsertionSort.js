'use strict';

function insertionSort(array) {    
    let n = array.length,
        swapCount = 0,
        comparisonCount = 0;

    for (let i=1; i < n; i++) {
        for (let j=i; j > 0; j--) {
            comparisonCount++;
            if (array[j-1] > array[j]) {
                swap(array, j-1, j);
                swapCount++;
            }
        }
    }    

    console.log(`swaps: ${swapCount}`);
    console.log(`comparison: ${comparisonCount}`);
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

let array = 'INSERTIONSORTEXAMPLE'.split('');
insertionSort(array);
console.log(`${array.join('')}\n`);

array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
insertionSort(array);
console.log(`${array.join('')}\n`);

array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
insertionSort(array);
console.log(`${array.join('')}\n`);