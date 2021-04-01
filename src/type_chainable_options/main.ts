interface Chainable {
    option: (key: string, value: any) => Chainable,
    get: () => Result
}

/*
In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get().

 In option, you can extend the current config type by the given key and value. We should about to access the final result via get.

 You can assume that key only accepts string and the value can be anything - just leave it as-is. Same key won't be passed twice.
 */
declare const config: Chainable;

const result: Result  = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get();


interface Result {
    foo: number,
    name: string,
    bar: {
        value: string
    }
}


