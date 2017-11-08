'use strict';

let swapCount, comparisonCount;

function randomizedSelection(array, i, left = 0, right = array.length - 1) {
    const n = right - left + 1;

    if (n === 1) return array[left];

    const pivot = choosePivot(left, right);
    swap(array, left, pivot);

    const j = partition(array, left, right);

    if (j === i) return array[j];
    if (j > i) return randomizedSelection(array, i, left, j-1);
    if (j < i) return randomizedSelection(array, i, j+1, right);
}

function choosePivot(left, right) {
    const n = right - left + 1;
    return ~~(Math.random() * n) + left;
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
    swapCount++;
}

function partition(array, left, right) {
    const pivot = array[left];
    let i = left + 1;

    for (let j = i; j <= right; j++) {
        comparisonCount++;
        if (array[j] < pivot) {
            swap(array, j, i);
            i++;
        }
    }

    swap(array, left, i - 1);

    return i - 1;
}

swapCount = 0; comparisonCount = 0;
let a = [8, 7, 6, 5, 4, 3, 2, 1],
    b = [1, 2, 3, 4, 5, 6, 7, 8],
    c = [3, 8, 2, 5, 1, 4, 7, 6];

swapCount = 0; comparisonCount = 0;
console.log(randomizedSelection(a, 2));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
console.log(randomizedSelection(b, 2));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
console.log(randomizedSelection(c, 2));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
let array = 'QUICKSORTEXAMPLE'.split('');
console.log(randomizedSelection(array, 5));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
console.log(randomizedSelection(array, 5));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
console.log(randomizedSelection(array, 5));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);