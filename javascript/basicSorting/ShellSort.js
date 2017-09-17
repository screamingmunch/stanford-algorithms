'use strict';

function shellSort(array) {    
    let n = array.length,
        h = 1,
        swapCount = 0,
        comparisonCount = 0;

    while (h < n) {
        h = 3*h + 1;
    }    

    while (h > 1) {
        h = ~~(h/3);

        for (let i=h; i < n; i++) {
            for (let j=i; j > 0; j -= h) {
                comparisonCount++;
                if (j-h >= 0 && array[j-h] > array[j]) {
                    swap(array, j-h, j);
                    swapCount++;
                }
            }
        }       
    }    

    console.log(`swaps: ${swapCount}`);
    console.log(`comparison: ${comparisonCount}`);
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

let array = 'SHELLSORTEXAMPLE'.split('');
shellSort(array);
console.log(`${array.join('')}\n`);

array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
shellSort(array);
console.log(`${array.join('')}\n`);

array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
shellSort(array);
console.log(`${array.join('')}\n`);