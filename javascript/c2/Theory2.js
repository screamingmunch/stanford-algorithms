'use strict';

function findLocalMinimum(grid, iMin = 0, iMax = grid.length-1, jMin = 0, jMax = grid.length-1) {
    const sectionSize = iMax - iMin + 1,
          gridSize = grid.length;
    
    if (sectionSize <= 3) {
        let visitQueue = [];

        for (let i = iMin; i <= iMax; i++) {
            for (let j = jMin; j <= jMax; j++) {
                visitQueue.push([i, j]);
            }
        }

        // Visiting elements
        while (visitQueue.length > 0) {
            const [i, j] = visitQueue.shift();

            if (i > 0) {
                if (grid[i][j] < grid[i-1][j]) {
                    visitQueue = mark(grid, visitQueue, i-1, j);
                }
                else {
                    visitQueue = mark(grid, visitQueue, i, j);         
                    continue;
                }
            }

            if (i < gridSize - 1) {
                if (grid[i][j] < grid[i+1][j]) {
                    visitQueue = mark(grid, visitQueue, i+1, j);
                }
                else {
                    visitQueue = mark(grid, visitQueue, i, j);  
                    continue;       
                }
            }
            
            if (j > 0) {
                if (grid[i][j] < grid[i][j-1]) {
                    visitQueue = mark(grid, visitQueue, i, j-1);
                }
                else {
                    visitQueue = mark(grid, visitQueue, i, j);         
                    continue;
                }
            }

            if (j < gridSize - 1) {
                if (grid[i][j] < grid[i][j+1]) {
                    visitQueue = mark(grid, visitQueue, i, j+1);
                }
                else {
                    visitQueue = mark(grid, visitQueue, i, j);  
                    continue;       
                }
            }

            return grid[i][j];                
        }                      
    }
    else {
        // Splitting up in 4 problems:
        const med = ~~((sectionSize-1)/2);

        let minimum = findLocalMinimum(grid, iMin, iMin+med, jMin, jMin+med) 
        || findLocalMinimum(grid, iMin, iMin+med, jMin+med+1, jMax) 
        || findLocalMinimum(grid, iMin+med+1, iMax, jMin, jMin+med) 
        || findLocalMinimum(grid, iMin+med+1, iMax, jMin+med+1, jMax) ;    

        return minimum;
    }

    return false;
}

function mark(grid, visitQueue, i, j) {
    return visitQueue.filter(([x, y]) => i !== x ||j !== y);
}

let grid1 = [
    [21, 21, 26],
    [ 11, 12, 16],
    [14,  15, 3]
];

console.log(findLocalMinimum(grid1));

let grid2 = [
    [ 41, 31, 26,  8, 22, 34],
    [ 39, 32, 16,  3, 25, 27],
    [14,  15, 13,  4, 21, 29],
    [ 7, 20,  8, 19, 24, 31],
    [12, 15, 21, 10, 23, 36],
    [33, 26, 32, 35, 28, 30]
];

console.log(findLocalMinimum(grid2));