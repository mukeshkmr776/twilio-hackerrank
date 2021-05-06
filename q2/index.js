'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

function processLogs(logs, threshold) {
    // Write your code here
    const map = {};
    const result = [];

    function addToMap(key) {
        key = String(key);
        if (map[key] === undefined) {
            map[key] = 1;
        } else {
            map[key] += 1;
        }
    }

    logs.forEach(log => {
        let [sender, receiver, amount] = log.trim().split(' ');
        console.log(sender, receiver, amount);
        amount = parseFloat(amount);

        if (sender === receiver) {
            addToMap(sender);
        } else {
            addToMap(sender);
            addToMap(receiver);
        }
    });

    Object.keys(map).forEach(key => {
        if (map[key] >= threshold) {
            result.push(key);
        }
    });

    // console.log(map);
    // console.log(result);
    return result.sort((a, b) => parseInt(a) - parseInt(b));
}

function main() {

    const logs = ["9 7 50", "22 7 20", "33 7 50", "22 7 30"];
    // const logs = ["9 7 50", "22 7 20", "33 7 50", "22 7 30", "7 7 15"];
    const threshold = 3;
    const result = processLogs(logs, threshold);

    process.stdout.write(result.join('\n') + '\n');
}


console.clear();
main();
