'use strict';

function quickSort(array, left = 0, right = array.length-1) {
    const n = right - left + 1;

    if (n <= 1) {
        return 0;
    }

    const pivot = choosePivot(left, right);    

    const sortedPivot = partition(array, left, right);

    let comparisonCount = n-1;    
    comparisonCount += quickSort(array, left, sortedPivot-1);
    comparisonCount += quickSort(array, sortedPivot+1, right);

    return comparisonCount;
}

function choosePivot(left, right) {
    return left;
}

function swap(array, i, j) {
    if (i !== j) {
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function partition(array, left, right) {
    const pivot = array[left];
    let i = left+1;

    for (let j=i; j <= right; j++) {
        if (array[j] < pivot) {
            swap(array, j, i);
            i++;
        }
    }

    swap(array, left, i-1);

    return i-1;
}

const fs = require('fs'),
      readStream = fs.createReadStream('javascript/c2/QuickSort.txt', 'utf8');

let data = '';

readStream
    .on('data', chunk => { data += chunk })
    .on('end', start);

function start() {
    let a = data.split('\r\n').map(i => Number(i));

    console.log(quickSort(a));
}