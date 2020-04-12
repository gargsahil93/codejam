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
        let test = +readLine();
        let res = magic(test);
        console.log(`Case #${i}:`);
        res.forEach(node => console.log(`${node[0]} ${node[1]}`));
        i++;
    }
}

let count0 = (bin) => {
    let diff = 0;
    [...bin].forEach(el => !+el && diff++);
    return diff;
};
let binaryWithDiff = (n) => {
    let bin = n.toString(2);
    let diff = count0(bin);
    let after = n - diff;
    let diffAf = count0(after.toString(2));
    while (diffAf + after > n) {
        after = n - diffAf;
        diffAf = count0(after.toString(2));
    }
    return after;
};

function magic(n) {
    let calculateFor = binaryWithDiff(n);
    let bin = calculateFor.toString(2);
    let row = 1, direction = 'right';
    let steps = [];
    [...bin].reverse().forEach(ch => {
        if (ch === '0') {
            if (direction === 'right') {
                steps.push([row, 1]);
            } else {
                steps.push([row, row]);
            }
        } else {
            if (direction === 'right') {
                for (let i = 1; i <= row; i++) {
                    steps.push([row, i]);
                }
                direction = 'left';
            } else {
                for (let i = row; i >= 1; i--) {
                    steps.push([row, i]);
                }
                direction = 'right';
            }
        }
        row++;
    });
    let summed = calculateFor + count0(calculateFor.toString(2));
    if (summed < n) {
        let col = direction === 'right' ? 1 : undefined;
        for (let i = 1; i <= n-summed; i++) {
            steps.push([row, col || row]);
            row++;
        }
    }
    return steps;
}