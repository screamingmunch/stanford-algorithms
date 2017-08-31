'use strict';

function karatsubaMultiplication(x, y) {
    const n = Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;

    if (n === 1) {
        return x * y;
    }

    const i = Math.pow(10, n/2),
          b = x % i,
          a = ( x - b ) /i;

    const d = y % i,
          c = ( y - d ) /i;

    const ac = karatsubaMultiplication(a, c),
          bd = karatsubaMultiplication(b, d),
          k = karatsubaMultiplication(a+b, c+d) - ac - bd;

    return Math.pow(10, n)*ac + i*k + bd;

}

console.log(karatsubaMultiplication(1234, 5678));