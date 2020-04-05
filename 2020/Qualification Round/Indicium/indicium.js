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
        let res = magic(test[0], test[1]);
        if (res !== -1) {
            console.log(`Case #${i}: POSSIBLE`);
            res.forEach(row => console.log(row.join(' ')));
        } else {
            console.log(`Case #${i}: IMPOSSIBLE`);
        }
        i++;
    }
}

function isPossible (caseN) {
    if (caseN.needed === 0) return [];
    if (caseN.needed > caseN.availableSlots) return -1;
    let map = caseN.availableMap;
    let rowKeys = Object.keys(map);
    for (let i = 0; i< rowKeys.length; i++) {
        let possibleX = rowKeys[i];
        let colKeys = Object.keys(map[possibleX]);
        for (let j = 0; j < colKeys.length; j++) {
            let possibleY = colKeys[j];
            let caseCopy = JSON.parse(JSON.stringify(caseN));
            caseCopy.needed--;
            let mapCopy = caseCopy.availableMap;
            delete mapCopy[possibleX];
            caseCopy.availableSlots -= colKeys.length;
            for (let k = 0; k < rowKeys.length; k++) {
                if (+rowKeys[k] !== +possibleX && mapCopy[rowKeys[k]] !== undefined && mapCopy[rowKeys[k]][possibleY] !== undefined) {
                    delete mapCopy[rowKeys[k]][possibleY];
                    caseCopy.availableSlots--;
                }
            }
            let slots = isPossible(caseCopy);
            if (slots !== -1) {
                slots.push([possibleX, possibleY]);
                return slots;
            }
        }
    }
    return -1;
}

function checkDiagonal(arr) {
    let len = arr.length;
    let matrix = [];
    let cases = [];
    let caseIndex = 0;
    while (caseIndex++ < len) {
        cases.push({
            index : caseIndex,
            needed : len,
            availableSlots : 0,
            availableMap : {}
        });
    }
    arr.forEach((el, index) => {
        if (matrix[index] === undefined) matrix[index] = new Array(len).fill(0);
        matrix[index][index] = el;
        cases[el-1].needed--;
    });
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if ( i !== j) {
                cases.forEach(caseN => {
                    if (caseN.index !== matrix[i][i] && caseN.index !== matrix[j][j]) {
                        caseN.availableSlots++;
                        if (caseN.availableMap[i] === undefined) caseN.availableMap[i] = {};
                        caseN.availableMap[i][j] = true;
                    }
                });
            }
        }
    }
    cases.sort((a, b) => {
        return a.needed - b.needed;
    });
    for (let i = 0; i < len; i++) {
        let caseN = cases[i];
        let slots = isPossible(JSON.parse(JSON.stringify(caseN)));
        if (slots === -1) return -1;
        slots.forEach(slot => {
            matrix[slot[0]][slot[1]] = caseN.index;
            for (let j = i+1; j < len; j++) {
                let processCase = cases[j];
                let map = processCase.availableMap;
                if (map[slot[0]] && map[slot[0]][slot[1]]) {
                    delete map[slot[0]][slot[1]];
                    processCase.availableSlots--;
                }
            }
        });
    }
    return matrix;
}

function magic(n, k) {
    let possibleDiagonals = (arr, n, k, maxN) => {
        if (k === 0 && n === 0) {
            return checkDiagonal(arr);
        }
        if ((n === 0 && k > 0) || (n > 0 && k === 0)) return -1;
        for (let i = 1; i <= maxN && k-i >= 0 ; i++) {
            let res = possibleDiagonals(arr.concat([i]), n-1, k-i, maxN);
            if (res !== -1) return res;
        }
        return -1;
    };
    if (k-1 === n || k+1 === n*n) return -1;
    return possibleDiagonals([], n, k, n);
}