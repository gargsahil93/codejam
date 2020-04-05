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
        let events = [];
        while (test-- > 0) {
            events.push(readLine().split(' ').slice(0, 2).map(ch => +ch));
        }
        console.log(`Case #${i++}: ${magic(events)}`);
    }
}

function magic(events) {
    events.forEach((event, index) => event.originalOrder = index);
    events.sort((a, b) => a[0] - b[0]);
    let jFree = 0, cFree = 0;
    for (let i = 0; i < events.length; i++) {
        if (jFree <= events[i][0]) {
            events[i]['schedule'] = 'J'
            jFree = events[i][1];
        } else if (cFree <= events[i][0]) {
            events[i]['schedule'] = 'C';
            cFree = events[i][1];
        } else return 'IMPOSSIBLE';
    }
    events.sort((a, b)=> a.originalOrder - b.originalOrder);
    let schedule = '';
    events.forEach(event => schedule += event.schedule);
    return schedule;
}