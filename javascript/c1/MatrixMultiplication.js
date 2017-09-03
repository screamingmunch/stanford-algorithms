'use strict';

function matrixMultiplicationNaive(X, Y) {
    const n = X.length;
    let Z = Array.from({length:n}, c => Array.from({length:n}, d => 0));

    for (let i=0; i < n; i++) {
        for (let j=0; j < n; j++) {
            for (let k=0; k < n; k++) {
                Z[i][j] += X[i][k] * Y[k][j];
            }
        }
    }

    return Z;
}

function matrixMultiplicationRecursive(X, Y) {
    const n = X.length;
    let Z;

    if (n === 1) {
        Z = [[X[0][0] * Y[0][0]]];
    }
    else {
        const m = n/2;

        let A = Array.from({length: m}, c => Array.from({length: m})), 
            B = Array.from({length: m}, c => Array.from({length: m})),
            C = Array.from({length: m}, c => Array.from({length: m})),
            D = Array.from({length: m}, c => Array.from({length: m})),
            E = Array.from({length: m}, c => Array.from({length: m})),
            F = Array.from({length: m}, c => Array.from({length: m})),
            G = Array.from({length: m}, c => Array.from({length: m})),
            H = Array.from({length: m}, c => Array.from({length: m}));

        for (let i=0; i < n; i++) {
            for (let j=0; j < n; j++) {
                const x = X[i][j],
                      y = Y[i][j];

                if (i < m) {
                    if (j < m) {
                        A[i][j] = x;
                        E[i][j] = y;
                    }
                    else {
                        B[i][j-m] = x;
                        F[i][j-m] = y;
                    }
                }
                else {
                    if (j < m) {
                        C[i-m][j] = x;
                        G[i-m][j] = y;
                    }
                    else {
                        D[i-m][j-m] = x;
                        H[i-m][j-m] = y;
                    }
                }
            }
        }

        const AE = matrixMultiplicationRecursive(A, E),
              BG = matrixMultiplicationRecursive(B, G),
              AF = matrixMultiplicationRecursive(A, F),
              BH = matrixMultiplicationRecursive(B, H),
              CE = matrixMultiplicationRecursive(C, E),
              DG = matrixMultiplicationRecursive(D, G),
              CF = matrixMultiplicationRecursive(C, F),
              DH = matrixMultiplicationRecursive(D, H),
              Q1 = sumMatrices(AE, BG),
              Q2 = sumMatrices(AF, BH),
              Q3 = sumMatrices(CE, DG),
              Q4 = sumMatrices(CF, DH);

        Z = Array.from({length:n}, c => Array.from({length:n}));
        for (let i=0; i < n; i++) {
            for (let j=0; j < n; j++) {
                if (i < m) {
                    if (j < m) {
                        Z[i][j] = Q1[i][j];
                    }
                    else {
                        Z[i][j] = Q2[i][j-m];
                    }
                }
                else {
                    if (j < m) {
                        Z[i][j] = Q3[i-m][j];
                    }
                    else {
                        Z[i][j] = Q4[i-m][j-m];
                    }
                }
            }
        }
    }
    return Z;
}

function sumMatrices(X, Y) {
    const n = X.length,
          Z = Array.from({length:n}, c => Array.from({length:n}, d => 0));

    for (let i=0; i < n; i++) {
        for (let j=0; j < n; j++) {
            Z[i][j] = X[i][j] + Y[i][j];
        }
    }

    return Z;
}

function subtractMatrices(X, Y) {
    const n = X.length,
          Z = Array.from({length:n}, c => Array.from({length:n}, d => 0));

    for (let i=0; i < n; i++) {
        for (let j=0; j < n; j++) {
            Z[i][j] = X[i][j] - Y[i][j];
        }
    }

    return Z;
}

function matrixMultiplicationStrassen(X, Y) {
    const n = X.length;
    let Z;

    if (n === 1) {
        Z = [[X[0][0] * Y[0][0]]];
    }
    else {
        const m = n/2;

        let A = Array.from({length: m}, c => Array.from({length: m})), 
            B = Array.from({length: m}, c => Array.from({length: m})),
            C = Array.from({length: m}, c => Array.from({length: m})),
            D = Array.from({length: m}, c => Array.from({length: m})),
            E = Array.from({length: m}, c => Array.from({length: m})),
            F = Array.from({length: m}, c => Array.from({length: m})),
            G = Array.from({length: m}, c => Array.from({length: m})),
            H = Array.from({length: m}, c => Array.from({length: m}));

        for (let i=0; i < n; i++) {
            for (let j=0; j < n; j++) {
                const x = X[i][j],
                      y = Y[i][j];

                if (i < m) {
                    if (j < m) {
                        A[i][j] = x;
                        E[i][j] = y;
                    }
                    else {
                        B[i][j-m] = x;
                        F[i][j-m] = y;
                    }
                }
                else {
                    if (j < m) {
                        C[i-m][j] = x;
                        G[i-m][j] = y;
                    }
                    else {
                        D[i-m][j-m] = x;
                        H[i-m][j-m] = y;
                    }
                }
            }
        }

        const P1 = matrixMultiplicationStrassen(A, subtractMatrices(F, H)),
              P2 = matrixMultiplicationStrassen(sumMatrices(A, B), H),
              P3 = matrixMultiplicationStrassen(sumMatrices(C, D), E),
              P4 = matrixMultiplicationStrassen(D, subtractMatrices(G, E)),
              P5 = matrixMultiplicationStrassen(sumMatrices(A, D), sumMatrices(E, H)),
              P6 = matrixMultiplicationStrassen(subtractMatrices(B, D), sumMatrices(G, H)),
              P7 = matrixMultiplicationStrassen(subtractMatrices(A, C), sumMatrices(E, F)),
              Q1 = sumMatrices(subtractMatrices(sumMatrices(P5, P4), P2), P6),
              Q2 = sumMatrices(P1, P2),
              Q3 = sumMatrices(P3, P4),
              Q4 = subtractMatrices(subtractMatrices(sumMatrices(P1, P5), P3), P7);

        Z = Array.from({length:n}, c => Array.from({length:n}));
        for (let i=0; i < n; i++) {
            for (let j=0; j < n; j++) {
                if (i < m) {
                    if (j < m) {
                        Z[i][j] = Q1[i][j];
                    }
                    else {
                        Z[i][j] = Q2[i][j-m];
                    }
                }
                else {
                    if (j < m) {
                        Z[i][j] = Q3[i-m][j];
                    }
                    else {
                        Z[i][j] = Q4[i-m][j-m];
                    }
                }
            }
        }
    }
    return Z;
}

let a = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
let b = [
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [25, 26, 27, 28],
    [29, 30, 31, 32]
];

let c = matrixMultiplicationNaive(a, b);
console.log(JSON.stringify(c));

let d = matrixMultiplicationRecursive(a, b);
console.log(JSON.stringify(d));

let e = matrixMultiplicationStrassen(a, b);
console.log(JSON.stringify(e));