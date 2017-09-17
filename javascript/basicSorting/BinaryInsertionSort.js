'use strict';

function binaryInsertionSort(array) {    
    let n = array.length,
        swapCount = 0,
        comparisonCount = 0;

    for (let i=1; i < n; i++) {
        let x = array[i],
            left = 0,
            right = i,
            middle;

        do {
            middle = ~~((right-left)/2) + left;

            comparisonCount++;
            if (array[middle] < x) {
                left = middle + 1;

                if (left > right) {
                    left = right;
                }
            }
            else if (array[middle] >= x) {
                right = middle;

                if (right < left) {
                    right = left;
                }
            }            
        } while (right !== left);

        for (let j=i; j > left; j--) {
            swap(array, j-1, j);
            swapCount++;
        }
    }    

    console.log(`swaps: ${swapCount}`);
    console.log(`comparison: ${comparisonCount}`);
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

let array = 'INSERTIONSORTEXAMPLE'.split('');
binaryInsertionSort(array);
console.log(`${array.join('')}\n`);

array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
binaryInsertionSort(array);
console.log(`${array.join('')}\n`);

array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
binaryInsertionSort(array);
console.log(`${array.join('')}\n`);