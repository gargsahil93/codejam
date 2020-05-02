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
        let test = readLine().split(' ').slice(0, 3);
        let res = magic(+test[0], +test[1], test[2]);
        console.log(`Case #${i++}: ${res}`);
    }
}

function magic(x, y, path) {
    let t = 0;
    while (t <= path.length) {
        let dist = Math.abs(x) + Math.abs(y);
        if (dist <= t) return t;
        switch (path[t]) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
        }
        t++;
    }
    return 'IMPOSSIBLE';
}