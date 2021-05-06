const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('ascii');

function parseLine(line) {
    let files = '';

    const [, text, ] = line.substring(line.indexOf('"'), line.lastIndexOf('"')).split(' ');
    let responseCode = (line.split(' '));
    responseCode = responseCode[responseCode.length - 2]

    if (responseCode !== '200') {
        return '';
    }

    if (text && (text.trim().toLowerCase().endsWith('.gif'))) {
        let temp = text.substring(text.lastIndexOf('/') + 1);
        if (temp.length > 0) {
            files = temp;
        }
    }

    return files;
}

function processFile(filename) {
    const lines = fs.readFileSync(filename).toString().split('\n');
    const filesList = [];

    lines.forEach(line => {
        let response = parseLine(line);
        if (response && response.length > 0) {
            filesList.push(response);
        }
    });

    writeOutputFile(filename, filesList)
}

function writeOutputFile(filename, filesList) {
    const outputFile = 'gifs_' + filename;
    const writeStream = fs.createWriteStream(outputFile);
    writeStream.write(filesList.join('\n'))
    writeStream.close();
}

function main() {
    // read the string filename
    const filename = 'sample.txt';
    processFile(filename);

}

console.clear();
main();
