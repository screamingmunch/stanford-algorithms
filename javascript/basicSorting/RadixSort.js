'use strict';

function countingSort(a, k, i) {    
    const n = array.length;

    let b = Array.from({length: n}, i => 0),
        c = Array.from({length: k}, i => 0);

    for (let j=0; j < n; j++) {
        let digit = getMthDigit(a[j], i);
        c[digit]++;
    }
    for (let j=1; j < k; j++) {
        c[j] += c[j-1];
    }
    for (let j=n-1; j >= 0; j--) {
        let digit = getMthDigit(a[j], i);
        b[c[digit]-1] = a[j];
        c[digit]--;
    }

    return b;
}

function getMthDigit(number, m) {
    return ~~(number / Math.pow(10, m)) % 10;
}

function radixSort(a, d, k) {    
    for (let i=0; i < d; i++) {
        a = countingSort(a, k, i);
    }
    return a;
}

let array = [4096, 729, 6859, 8, 1331, 5832, 1728, 8000, 2744, 343, 512, 125, 1, 64, 27, 2197, 216, 1000, 4913, 3375];
console.log(`${radixSort(array, 4, 10)}\n`);

array = [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000];
console.log(`${radixSort(array, 4, 10)}\n`);

array = [8000, 6859, 5832, 4913, 4096, 3375, 2744, 2197, 1728, 1331, 1000, 729, 512, 343, 216, 125, 64, 27, 8, 1];
console.log(`${radixSort(array, 4, 10)}\n`);