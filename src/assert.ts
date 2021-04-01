export function assert<I, O>(input: I, fn: (value: I) => O, expectedValue: O) {
    const result = fn(input);
    const assertionString = result === expectedValue ? '\u2713' : `\u2717 expected ${expectedValue}`;
    const color = result === expectedValue ? '\x1b[32m' : '\x1b[31m';
    console.log(color, `'${input}' => ${result} ${assertionString}`, '\x1b[0m');
}