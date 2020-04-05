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
        let n = +readLine();
        let matrix = [];
        let j = 0;
        while (j++ < n) {
            matrix.push(readLine().split(' ').slice(0, n).map(el=>+el));
        }
        let res = magic(matrix);
        console.log(`Case #${i++}: ${res.trace} ${res.rowCount} ${res.colCount}`);
    }
}

function magic(matrix) {
    let colMap = [], rowMap = [], trace = 0, rowCount = 0, colCount = 0;
    matrix.forEach((row, rowIndex) => {
        if (rowMap[rowIndex] === undefined) rowMap[rowIndex] = {}
        row.forEach((item, colIndex) => {
            if (colMap[colIndex] === undefined) colMap[colIndex] = {};
            if (rowIndex === colIndex) trace+=item;
            if (rowMap[rowIndex]['isLatin'] === undefined) {
                if (rowMap[rowIndex][item] === undefined) {
                    rowMap[rowIndex][item] = true;
                } else {
                    rowMap[rowIndex]['isLatin'] = false;
                    rowCount++;
                }
            }
            if (colMap[colIndex]['isLatin'] === undefined) {
                if (colMap[colIndex][item] === undefined) {
                    colMap[colIndex][item] = true;
                } else {
                    colMap[colIndex]['isLatin'] = false;
                    colCount++;
                }
            }
        });
    });
    return {
        trace : trace,
        rowCount : rowCount,
        colCount : colCount
    };
}
