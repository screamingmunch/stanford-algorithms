'use strict';

let swapCount, comparisonCount;

function mergeSort(array, low = 0, mid = ~~(array.length / 2), high = array.length - 1) {
    if (high - low > 0) {
        mergeSort(array, low, ~~((low + mid) / 2), mid);
        mergeSort(array, mid + 1, ~~((high + mid) / 2), high);
        merge(array, low, mid, high);
    }
}

function merge(array, low, mid, high) {
    let leftArray = array.slice(low, mid + 1),
        rightArray = array.slice(mid + 1, high + 1),
        leftPos = 0,
        rightPos = 0;

    for (let i = low; i <= high; i++) {
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

function deterministicSelection(array, i, left = 0, right = array.length - 1) {
    const n = right - left + 1;

    if (n === 1) return array[left];

    const j = partition(array, left, right, n);

    if (j === i) return array[j];
    if (j > i) return deterministicSelection(array, i, left, j-1);
    if (j < i) return deterministicSelection(array, i, j+1, right);
}

function choosePivot(array, left, right, n) {
    let groups = array.slice(left, right+1).reduce((groups, element) => {
        const lastGroup = groups[groups.length-1];
        if (lastGroup && lastGroup.length < 5) {
            lastGroup.push(element);
        }
        else {
            groups.push([element]);
        }
        return groups;
    }, []);

    groups.forEach(group => mergeSort(group));

    let middles = groups.reduce((middles, group) =>{
        const middle = ~~((group.length-1)/2);
        middles.push(group[middle]);
        return middles;
    }, []);

    return array.indexOf(deterministicSelection(middles, ~~(n/10)));
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
    swapCount++;
}

function partition(array, left, right, n) {
    const pivot = choosePivot(array, left, right, n);
    swap(array, left, pivot);

    const pivotValue = array[left];
    let i = left + 1;

    for (let j = i; j <= right; j++) {
        comparisonCount++;
        if (array[j] < pivotValue) {
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
console.log(deterministicSelection(a, 2));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
console.log(deterministicSelection(b, 2));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
console.log(deterministicSelection(c, 2));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
let array = 'QUICKSORTEXAMPLE'.split('');
console.log(deterministicSelection(array, 5));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
console.log(deterministicSelection(array, 5));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);

swapCount = 0; comparisonCount = 0;
array = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.split('');
console.log(deterministicSelection(array, 5));
console.log(`swaps: ${swapCount}`);
console.log(`comparison: ${comparisonCount}`);