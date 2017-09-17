'use strict';

function selectionSort(array) {    
    let n = array.length,
        swapCount = 0,
        comparisonCount = 0;

    for (let i=0; i < n; i++) {
        let minIndex = i;

        for (let j=i+1; j < n; j++) {
            comparisonCount++;
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        swapCount++;
        swap(array, i, minIndex);
    }

    console.log(`swaps: ${swapCount}`);
    console.log(`comparison: ${comparisonCount}`);
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

let array = 'SELECTIONSORTEXAMPLE'.split('');
selectionSort(array);
console.log(`${array.join('')}\n`);

array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
selectionSort(array);
console.log(`${array.join('')}\n`);

array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
selectionSort(array);
console.log(`${array.join('')}\n`);