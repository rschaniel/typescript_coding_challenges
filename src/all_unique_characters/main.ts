/*
Implement an algorithm to determine if a string has all unique characters.
 */
function hasAllUniqueCharacters(input: string): boolean {
    const characterSet = new Set(input.split(''));
    return input.length === characterSet.size;
}

function testFunction(input: string, expectedValue: boolean, fn: (value: string) => boolean) {
    const result = fn(input);
    const assertionString = result === expectedValue ? '\u2713' : `\u2717 expected ${expectedValue}`;
    const color = result === expectedValue ? '\x1b[32m' : '\x1b[31m';
    console.log(color, `'${input}' => ${result} ${assertionString}`);
}

console.log('----------------------------------------------------');
testFunction('test', false, hasAllUniqueCharacters);
testFunction('abc', true, hasAllUniqueCharacters);
testFunction('all', false, hasAllUniqueCharacters);
testFunction('', true, hasAllUniqueCharacters);

/*
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
 */

function hasAllUniqueCharactersV2(input: string): boolean {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[i] === input[j] && i !== j) {
                return false;
            }
        }
    }

    return true;
}

console.log('\x1b[0m', '-------------------------v2------------------------');
testFunction('test', false, hasAllUniqueCharactersV2);
testFunction('abc', true, hasAllUniqueCharactersV2);
testFunction('all', false, hasAllUniqueCharactersV2);
testFunction('', true, hasAllUniqueCharactersV2);
console.log('\x1b[0m', '----------------------------------------------------');
