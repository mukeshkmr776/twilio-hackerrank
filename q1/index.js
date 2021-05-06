'use strict';

// process.stdin.resume();
process.stdin.setEncoding('utf-8');

function firstOccurrence(s, x) {
    const WILDCARD = '*';
    const hasWildcard = x.includes(WILDCARD);

    if (!hasWildcard) {
        return s.indexOf(x);
    } else {
        const [left, right] = x.split(WILDCARD);

        const leftIndex = s.indexOf(left);
        const rightIndex = s.indexOf(right, leftIndex + left.length);
        const diff = rightIndex - (left.length + leftIndex) - 1;

        if (diff === 0) {
            return leftIndex;
        } else {
            return -1;
        }
    }
}

function main() {
    // const s = 'juliasamanthantjulia';
    // const x = 'ant';

    const s = 'juliasamanthasamanthajulia';
    const x = 'ant*as';

    const result = firstOccurrence(s, x);

    process.stdout.write(result + '\n');
}
console.clear();
main()