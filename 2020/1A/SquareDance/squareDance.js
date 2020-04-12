'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function main() {
    let line = 0;
    let readLine = () => {
        return inputString[line++];
    };
    let tests = +readLine();
    let i = 1;
    while(i <= tests) {
        let test = readLine().split(' ').slice(0, 2).map(n=>+n);
        let rows = test[0], cols = test[1];
        let matrix = [], rowI = 0;
        while (rowI < rows) {
            matrix.push(readLine().split(' ').slice(0, cols).map(n=>+n));
            rowI++
        }
        console.log(`Case #${i++}: ${magic(matrix, rows, cols)}`);
    }
}

function magic(matrix, rows, cols) {
    let processMatrix = [], sum = 0, toRemoveNext = [], toRemoveNextMap = {};
    let addToRemove = (processedVal, rowI, colI) => {
        let totalN = 0, totalSum = 0;
        if (processedVal.left) {
            totalN++;
            totalSum+=processedVal.left.val;
        }
        if (processedVal.right) {
            totalN++;
            totalSum+=processedVal.right.val;
        }
        if (processedVal.top) {
            totalN++;
            totalSum+=processedVal.top.val;
        }
        if (processedVal.down) {
            totalN++;
            totalSum+=processedVal.down.val;
        }
        if (processedVal.val < totalSum/totalN) {
            toRemoveNext.push([rowI, colI]);
            if (toRemoveNextMap[rowI] === undefined) toRemoveNextMap[rowI] = [];
            toRemoveNextMap[rowI][colI] = 1;
        }
    };
    matrix.forEach((row, rowI) => {
        if (processMatrix[rowI] === undefined) processMatrix[rowI] = [];
        row.forEach((val, colI) => {
            sum += val;
            let leftCol = colI > 0 && colI - 1;
            let rightCol = colI < cols-1 && colI + 1;
            let topRow = rowI > 0 && rowI - 1;
            let downRow = rowI < rows-1 && rowI + 1;
            let processedVal = {
                val,
                left : leftCol !== false && {
                    i : rowI,
                    j : leftCol,
                    val : row[leftCol]
                },
                right : rightCol !== false && {
                    i : rowI,
                    j : rightCol,
                    val : row[rightCol]
                },
                top : topRow !== false && {
                    i : topRow,
                    j : colI,
                    val : matrix[topRow][colI]
                },
                down : downRow !== false && {
                    i : downRow,
                    j : colI,
                    val : matrix[downRow][colI]
                }
            };
            processMatrix[rowI][colI] = processedVal;
            addToRemove(processedVal, rowI, colI);
        });
    });
    let interestLevel = sum;
    let toCheck = [], toCheckMap = {};
    let addToCheck = (point) => {
        if (!(toRemoveNextMap[point.i] && toRemoveNextMap[point.i][point.j])) {
            if (!(toCheckMap[point.i] && toCheckMap[point.i][point.j])) {
                toCheck.push([point.i, point.j]);
                if (toCheckMap[point.i] === undefined) toCheckMap[point.i] = {};
                toCheckMap[point.i][point.j] = 1;
            }
        }
    };
    while(toRemoveNext.length !== 0) {
        toRemoveNext.forEach(vertex => {
            let i = vertex[0], j = vertex[1], processedVal = processMatrix[i][j];
            sum -= processedVal.val;
            let left = processedVal.left, right= processedVal.right, top = processedVal.top, down = processedVal.down;
            if (left) {
                processMatrix[left.i][left.j]['right'] = right;
                addToCheck(left);
            }
            if (right) {
                processMatrix[right.i][right.j]['left'] = left;
                addToCheck(right);
            }
            if (top) {
                processMatrix[top.i][top.j]['down'] = down;
                addToCheck(top);
            }
            if (down) {
                processMatrix[down.i][down.j]['top'] = top;
                addToCheck(down);
            }
        });
        toRemoveNext = [];
        toRemoveNextMap = {};
        toCheck.forEach(point => {
            let i = point[0], j = point[1], processedVal = processMatrix[i][j];
            addToRemove(processedVal, i, j);
        });
        interestLevel+=sum;
        toCheck = [];
        toCheckMap = {};
    }
    return interestLevel;
}