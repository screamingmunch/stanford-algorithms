'use strict';

function bubbleSort(array) {    
    let n = array.length,
        swapped,
        i = 0,
        swapCount = 0,
        comparisonCount = 0;

    do {    
        let m = n-i;
        swapped = false;
        for (let j=0; j < n-i; j++) {
            comparisonCount++;
            if (array[j] > array[j+1]) {
                swap(array, j, j+1);
                swapCount++
                swapped = true;
            }
        }
    }
    while (swapped && i < n);

    console.log(`swaps: ${swapCount}`);
    console.log(`comparison: ${comparisonCount}`);
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

let array = 'BUBBLESORTEXAMPLE'.split('');
bubbleSort(array);
console.log(`${array.join('')}\n`);

array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
bubbleSort(array);
console.log(`${array.join('')}\n`);

array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
bubbleSort(array);
console.log(`${array.join('')}\n`);