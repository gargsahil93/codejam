'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;  //Store the data in inputString
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
        let test = readLine().split(' ').map(n=>+n);
        console.log(`Case #${i++}: ${magic(test[0], test[1])}`);
    }
}

function magic(x, y) {
    let direction = '';
    let check = (i, j) => {
        return (i+j)%2 !== 0;
    };
    let makeJump = (i, j) => {
        if (i === 0 && j === 0) return direction;
        if ((i+j) % 2 === 0) return 'IMPOSSIBLE';
        if (i%2 !== 0) {
            j = j/2;
            if (j===0) {
                if (i === 1) return direction+'E';
                else if (i === -1) return direction+'W';
            }
            if (check((i-1)/2, j)) {
                direction += 'E';
                i = (i-1)/2;
            } else if (check((i+1)/2, j)) {
                direction += 'W';
                i = (i+1)/2;
            } else return 'IMPOSSIBLE';
        } else {
            i = i/2;
            if (i === 0) {
                if (j === 1) return direction+='N';
                else if (j === -1) return direction+='S';
            }
            if (check(i, (j-1)/2)) {
                direction +='N';
                j = (j-1)/2;
            } else if (check(i, (j+1)/2)) {
                direction +='S';
                j = (j+1)/2;
            } else return 'IMPOSSIBLE';
        }
        return makeJump(i, j);
    };
    return makeJump(x, y);
}
