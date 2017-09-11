'use strict';

function sortAndCountInversions(array, low = 0, high = array.length - 1) {
    const len = high - low + 1;

    if (len === 1) {
        return 0;
    }
    
    const mid = low + ~~((len-1)/2),
          x = sortAndCountInversions(array, low, mid),
          y = sortAndCountInversions(array, mid+1, high),
          z = mergeAndCountSplitInversions(array, low, mid, high);

    return x + y + z;
}

function mergeAndCountSplitInversions(array, low, mid, high) {
    let leftArray = array.slice(low, mid+1),
        rightArray = array.slice(mid+1, high+1),
        leftPos = 0,
        rightPos = 0,
        leftLength = leftArray.length,
        inversions = 0;

    for (let i=low; i <= high; i++) {
        let leftX = leftArray[leftPos],
            rightX = rightArray[rightPos];

        if ((leftX !== undefined && rightX === undefined) || leftX <= rightX) {
            array[i] = leftX;
            leftPos++;
        }
        else if ((leftX === undefined && rightX !== undefined) || leftX > rightX) {
            array[i] = rightX;
            rightPos++;

            inversions += (leftLength - leftPos);
        }
    }

    return inversions;
}

const fs = require('fs'),
      readStream = fs.createReadStream('javascript/c1/IntegerArray.txt', 'utf8');

let data = '';

readStream
    .on('data', chunk => { data += chunk })
    .on('end', start);

function start() {
    let a = data.split('\r\n').map(i => Number(i));

    console.log(sortAndCountInversions(a));
}