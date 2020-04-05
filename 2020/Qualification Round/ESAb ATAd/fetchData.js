var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
let currLine, promise, newData;
rl.on('line', function (line) {
    currLine = line;
    newData = true;
});
rl.on('close', function () {
    process.exit(0);
});

function sleep(ms) {
    return new Promise(resolve => {
        let resolveFn = () => {
            if (newData) resolve();
            else setTimeout(resolveFn, ms);
        };
        setTimeout(resolveFn, ms);
    });
}

let magic = async (strLen) => {
    let indexToRead = 1, sameLeftIndex, oppLeftIndex, arr = Array(strLen), queryNumber = 1;
    let query = async (index) => {
        console.log(index);
        newData = false;
        queryNumber++;
        await sleep(0);
        return +currLine;
    };
    let check = async () => {
        console.log(arr.join(''));
        newData = false;
        await sleep(0);
        if (currLine === 'N') return 0;
        return 1;
    };
    while (1) {
        if (queryNumber % 10 === 1 && indexToRead !== 1) {
            if (sameLeftIndex !== undefined) {
                let queryRes = await query(sameLeftIndex);
                if (queryRes !== arr[sameLeftIndex-1]) {
                    arr = arr.map(bit => {
                        if (bit === undefined) return;
                        return bit === 1 ? 0 : 1;
                    });
                }
            }
            if (oppLeftIndex !== undefined) {
                let queryRes = await query(oppLeftIndex);
                if (queryRes !== arr[oppLeftIndex-1]) {
                    arr.reverse();
                    if (indexToRead > strLen/2) {
                        indexToRead = strLen + 1 - indexToRead;
                    }
                }
            }
        } else {
            let queryRes = await query(indexToRead);
            arr[indexToRead-1] = queryRes;
            if (indexToRead > strLen/2 && (sameLeftIndex === undefined || oppLeftIndex === undefined)) {
                if (sameLeftIndex === undefined && arr[indexToRead-1] === arr[strLen - indexToRead]) {
                    sameLeftIndex = strLen - indexToRead + 1;
                } else if (oppLeftIndex === undefined && arr[indexToRead-1] !== arr[strLen - indexToRead]) {
                    oppLeftIndex = strLen - indexToRead + 1;
                }
            }
            if (indexToRead === (strLen/2)+1) {
                break;
            }
            if (indexToRead <= strLen/2) indexToRead = strLen + 1 - indexToRead;
            else indexToRead = strLen + 2 - indexToRead;
        }
    }
    let res = await check();
    if (res === 0) rl.close();
};

let main = async () => {
    newData = false;
    await sleep(0);
    let tests = currLine.split(' ').slice(0, 2).map(n=>+n);
    while(tests[0]-- > 0) {
        await magic(tests[1]);
    }
    rl.close();
};

main();