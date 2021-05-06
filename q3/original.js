process.stdin.resume();
process.stdin.setEncoding('ascii');

let consoleInput = '';
process.stdin.on('data', (data) => {
    consoleInput += data;
});

process.stdin.on('end', () => {
    consoleInput = consoleInput.split('\n');
    main();    
});

let currentLine = 0;
function readLine() {
    if (currentLine >= consoleInput.length) {
        return null;
    }
    
    return consoleInput[currentLine++];
}


function main() {
    // read the string filename
    const filename = readLine();
    
}