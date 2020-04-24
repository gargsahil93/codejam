var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
let currLine, newData;

rl.on('line', function (line) {
    currLine = line;
    newData = true;
});

rl.on('close', function () {
    process.exit(0);
});

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


let halfLen = 1000000000;
async function interact (print) {
    if (print !== undefined) console.log(print);
    await sleep();
    return currLine;
}


async function checkSquare() {
    let centerChecks = [[0, 0], [halfLen/2, halfLen/2], [halfLen/2, -halfLen/2], [-halfLen/2, -halfLen/2], [-halfLen/2, halfLen/2]];
    for (let i = 0; i < 5; i++) {
        let point = centerChecks[i];
        let res = await interact(`${point[0]} ${point[1]}`);
        if (res === 'HIT') return point;
        if (res === 'CENTER') return 1;
    }
}
let min = -halfLen, max = halfLen;
async function left(x, y) {
    let between = async (inCircle, possibleEdge) => {
        if (inCircle === possibleEdge) return inCircle;
        if (inCircle - possibleEdge === 1) {
            let isEdge = await interact(`${possibleEdge} ${y}`);
            if (isEdge === 'HIT') return possibleEdge;
            else return inCircle;
        }
        let checkAt = Math.floor((inCircle+possibleEdge) / 2);
        let res = await interact(`${checkAt} ${y}`);
        if (res === 'CENTER') return true;
        if (res === 'HIT') return await between(checkAt, possibleEdge);
        else return await between(inCircle, checkAt+1);
    };
    return await between(x, min);
}

async function right(x, y) {
    let between = async (inCircle, possibleEdge) => {
        if (inCircle === possibleEdge) return inCircle;
        if (possibleEdge - inCircle === 1) {
            let isEdge = await interact(`${possibleEdge} ${y}`);
            if (isEdge === 'HIT') return possibleEdge;
            else return inCircle;
        }
        let checkAt = Math.floor((inCircle+possibleEdge) / 2);
        let res = await interact(`${checkAt} ${y}`);
        if (res === 'CENTER') return true;
        if (res === 'HIT') return await between(checkAt, possibleEdge);
        else return await between(inCircle, checkAt-1);
    };
    return await between(x, max);
}

async function up(x, y) {
    let between = async (inCircle, possibleEdge) => {
        if (inCircle === possibleEdge) return inCircle;
        if (possibleEdge-inCircle === 1) {
            let isEdge = await interact(`${x} ${possibleEdge}`);
            if (isEdge === 'HIT') return possibleEdge;
            else return inCircle;
        }
        let checkAt = Math.floor((inCircle+possibleEdge) / 2);
        let res = await interact(`${x} ${checkAt}`);
        if (res === 'CENTER') return true;
        if (res === 'HIT') return await between(checkAt, possibleEdge);
        else return await between(inCircle, checkAt-1);
    };
    return await between(y, max);
}

async function down(x, y) {
    let between = async (inCircle, possibleEdge) => {
        if (inCircle === possibleEdge) return inCircle;
        if (inCircle - possibleEdge === 1) {
            let isEdge = await interact(`${x} ${possibleEdge}`);
            if (isEdge === 'HIT') return possibleEdge;
            else return inCircle;
        }
        let checkAt = Math.floor((inCircle+possibleEdge) / 2);
        let res = await interact(`${x} ${checkAt}`);
        if (res === 'CENTER') return true;
        if (res === 'HIT') return await between(checkAt, possibleEdge);
        else return await between(inCircle, checkAt+1);
    };
    return await between(y, min);
}

let main = async () => {
    let tests = await interact();
    tests = +tests.split(' ')[0];
    let i = 1;
    while(i <= tests) {
        let inCircle = await checkSquare();
        if (inCircle !== 1) {
            let x = inCircle[0], y = inCircle[1];
            let upPoint = await up(x, y);
            if (upPoint !== true) {
                let downPoint = await down(x, y);
                if (downPoint !== true) {
                    let leftPoint = await left(x, y);
                    if (leftPoint !== true) {
                        let rightPoint = await right(x, y);
                        if (rightPoint !== true) {
                            let res = await interact(`${(leftPoint+rightPoint)/2} ${(upPoint+downPoint)/2}`);
                            if (res !== 'CENTER') rl.close();
                        }
                    }
                }
            }
        }
        i++;
    }
    rl.close();
};

main();
