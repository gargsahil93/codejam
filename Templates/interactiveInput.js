var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
let currLine, newData;

/*
Readline on every input
*/
rl.on('line', function (line) {
    currLine = line;
    newData = true;     //mark this flag, to be used by sleep method
});

/*
Close the interface explicitly
*/
rl.on('close', function () {
    process.exit(0);
});

/*
Wait until there is new input on console
*/
function sleep () {
    newData = false;
    return new Promise(resolve => {
        let resolveFn = () => {
            if (newData) resolve();
            else setTimeout(resolveFn, 0);  //keep setting timeouts until new input
        };
        setTimeout(resolveFn, 0);   //initial timeout
    });
}

/*
Print something on console and wait for new input
*/
async function interact (print) {
    if (print !== undefined) console.log(print);
    await sleep();
    return currLine;
}

let main = async () => {
    let tests = +(await interact());
    let i = 1;
    while(i <= tests) {
        let test = +(await interact(`Enter value for test ${i}`));
        console.log(`Machine Sent ${test} for ${i++}`);
    }
    rl.close();
};

main();
