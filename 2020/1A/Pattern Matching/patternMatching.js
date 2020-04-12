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
        let strs = [];
        while (test-- > 0) {
            strs.push(readLine());
        }
        console.log(`Case #${i++}: ${magic(strs)}`);
    }
}

function magic(strs) {
    let extractPrefix = () => {
        let prefixArr = [];
        strs.forEach((str, index) => {
            let starIndex = str.indexOf('*');
            prefixArr.push(str.slice(0, starIndex));
            strs[index] = str.slice(starIndex);
        });
        prefixArr.sort((a, b) => b.length - a.length);
        let biggest = prefixArr[0];
        for (let i=1; i < prefixArr.length; i++) {
            if (biggest.indexOf(prefixArr[i]) !== 0) {
                return -1;
            }
        }
        return biggest;
    };
    let extractSuffix = () => {
        let suffixArr = [];
        strs.forEach((str, index) => {
            let revStr = str.split('').reverse().join('');
            let starIndex = revStr.indexOf('*');
            suffixArr.push(revStr.slice(0, starIndex));
            revStr = revStr.slice(starIndex);
            strs[index] = revStr.split('').reverse().join('');
        });
        suffixArr.sort((a, b) => b.length - a.length);
        let biggest = suffixArr[0];
        for (let i=1; i < suffixArr.length; i++) {
            if (biggest.indexOf(suffixArr[i]) !== 0) {
                return -1;
            }
        }
        return biggest.split('').reverse().join('');
    };
    let processBetween = () => {
        let subStrs = [];
        strs.forEach((str, index) => {
            if (str.length > 1) {
                let nStr = str.slice(1);
                let starIndex = nStr.indexOf('*');
                subStrs.push(nStr.slice(0, starIndex));
                strs[index] = str.slice(starIndex+1);
            }
        });
        if (subStrs.length !== 0) {
            let res = subStrs.join('');
            return res + processBetween();
        } else {
            return '';
        }
    }
    let prefix = extractPrefix();
    if (prefix === -1) return '*';
    let suffix = extractSuffix();
    if (suffix === -1) return '*';
    let mid = processBetween();
    return prefix + mid + suffix;
}