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
        let test = readLine();
        console.log(`Case #${i++}: ${magic(test)}`);
    }
}

function magic(str) {
    let res = '';
    let lastCh = 0;
    [...str].forEach(ch => {
        let toAdd = +ch - lastCh;
        let chToAdd = toAdd > 0 ? '(' : ')';
        toAdd = Math.abs(toAdd);
        let chString = '';
        while (toAdd-- > 0) {
            chString += chToAdd;
        }
        res += chString + ch;
        lastCh = +ch;
    });
    if (lastCh > 0) {
        let chString = '';
        while (lastCh-- > 0) {
            chString += ')';
        }
        res+=chString;
    }
    return res;
}