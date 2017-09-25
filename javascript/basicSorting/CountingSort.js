'use strict';

function countingSort(a, k) {    
    const n = array.length;

    let b = Array.from({length: n}, i => 0),
        c = Array.from({length: k}, i => 0);

    for (let i=0; i < n; i++) {
        c[a[i]]++;
    }
    for (let i=1; i < k; i++) {
        c[i] += c[i-1];
    }
    for (let i=n-1; i >= 0; i--) {
        b[c[a[i]]] = a[i];
        c[a[i]]--;
    }

    return b;
}

let array = [20, 15, 8, 4, 17, 10, 16, 14, 9, 3, 11, 6, 5, 13, 18, 12, 2, 1, 7, 19];
console.log(`${countingSort(array, 20)}\n`);

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(`${countingSort(array, 20)}\n`);

array = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(`${countingSort(array, 20)}\n`);