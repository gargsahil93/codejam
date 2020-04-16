'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

/*
Start reading the data from input stream
*/
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;  //Store the data in inputString
});


/*
When the data stream ends, process the inputString
*/
process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

/*
calling this function when input stream has finished
*/
function main() {
    let line = 0;       //Maintain line numbers

    /*
    Read line by line
    * */
    let readLine = () => {
        return inputString[line++];
    };
    let tests = +readLine();
    let i = 1;
    while(i <= tests) {
        console.log(`Case #${i++}: Executed`);
    }
}
