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
        let people = [];
        while(test[0]-- > 0) {
            people.push(readLine().split(' ').slice(0, 3));
        }
        let res = magic(test[1], people);
        console.log(`Case #${i++}: ${res.x} ${res.y}`);
    }
}

function magic (intersections, people) {
    let xRange = Array(intersections+1).fill(0);
    let yRange = Array(intersections+1).fill(0);
    people.forEach(peep => {
        let x = +peep[0], y = +peep[1], direction = peep[2];
        switch (direction) {
            case 'N':
                for (let i = y+1; i <= intersections+1; i++) yRange[i]++;
                break;
            case 'S':
                for (let i = y-1; i >= 0; i--) yRange[i]++;
                break;
            case 'E':
                for (let i = x+1; i <= intersections; i++) xRange[i]++;
                break;
            case 'W':
                for (let i = x-1; i >= 0; i--) xRange[i]++;
                break;
        }
    });
    let minX = 0, minY = 0;
    xRange.forEach((x, index) => {
        if (x > xRange[minX]) minX = index;
    });
    yRange.forEach((y, index) => {
        if (y > yRange[minY]) minY = index;
    });
    return {
        x : minX,
        y : minY
    };
}
