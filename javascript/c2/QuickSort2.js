'use strict';

let swapCount, comparisonCount;

function quickSort(array, left = 0, right = array.length - 1) {
    const n = right - left + 1;

    if (n <= 1) {
        return array;
    }

    const pivotIndex = partition(array, left, right);

    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex, right);

    return array;
}

function choosePivot(array, left, right) {
    const n = right - left + 1;
    const pos = ~~(Math.random() * n) + left;
    return array[pos];
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
    swapCount++;
}

function partition(array, left, right) {
    const pivot = choosePivot(array, left, right);
    let i = left,
        j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            comparisonCount++;
            i++;
        }

        while (array[j] > pivot) {
            comparisonCount++;
            j--;
        }

        comparisonCount++;
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}

swapCount = 0; comparisonCount = 0;
let a = [8, 7, 6, 5, 4, 3, 2, 1],
    b = [1, 2, 3, 4, 5, 6, 7, 8],
    c = [3, 8, 2, 5, 1, 4, 7, 6];

console.log(quickSort(a).toString());
console.log(quickSort(b).toString());
console.log(quickSort(c).toString());

swapCount = 0; comparisonCount = 0;
let array = 'QUICKSORTEXAMPLE'.split('');
quickSort(array);
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);
console.log(`${array.join('')}\n`);

swapCount = 0; comparisonCount = 0;
array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
quickSort(array);
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);
console.log(`${array.join('')}\n`);

swapCount = 0; comparisonCount = 0;
array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
quickSort(array);
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);
console.log(`${array.join('')}\n`);