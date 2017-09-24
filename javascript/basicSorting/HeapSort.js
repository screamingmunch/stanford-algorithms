'use strict';

let swapCount, comparisonCount;

function heapSort(array) {    
    let n = array.length;

    // Heapify
    for (let i=~~((n-1)/2); i >= 0; i--) {
        sink(array, i, n);
    }

    // Sortdown
    for (let i=0; i < n; i++) {
        swap(array, 0, n-i-1);
        sink(array, 0, n-i-1);
    }         

    console.log(`swaps: ${swapCount}`);
    console.log(`comparison: ${comparisonCount}`);
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
    swapCount++;
}

function sink(array, i, n) {
    const lc = 2*(i+1)-1;

    if (lc < n) {
        const rc = lc + 1,
              mc = ( rc >= n ) ? lc : ( array[lc] > array[rc] ? lc : rc );

        comparisonCount += 3;
        if (array[i] < array[mc]) {
            swap(array, i, mc);
            sink(array, mc, n);
        }
    }
}

let array = 'HEAPSORTEXAMPLE'.split('');
swapCount = 0; comparisonCount = 0;
heapSort(array);
console.log(`${array.join('')}\n`);

array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
swapCount = 0; comparisonCount = 0;
heapSort(array);
console.log(`${array.join('')}\n`);

array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
swapCount = 0; comparisonCount = 0;
heapSort(array);
console.log(`${array.join('')}\n`);