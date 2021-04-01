import { assert } from '../assert';


function compressString(input: string): string {
    if (input.length < 3) {
        return input;
    }

    let output = '';
    let repetitionCount = 0;
    for (let i = 0; i < input.length; i++) {
        repetitionCount++;
        if (input[i] !== input[i+1]) {
            output += `${input[i]}${repetitionCount}`;
            repetitionCount = 0;
        }
    }
    return output.length < input.length ? output : input;
}

console.log();

assert('test', compressString, 'test');
assert('aabcccccaaa', compressString, 'a2b1c5a3');
assert('ttuuuz', compressString, 'ttuuuz');
assert('eeeee', compressString, 'e5');
assert('a', compressString, 'a');
assert('aa', compressString, 'aa');
assert('aaa', compressString, 'a3');
assert('', compressString, '');

console.log();
console.log();
console.log();
