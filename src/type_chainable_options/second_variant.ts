namespace SecondVariant {
    interface Chainable<P = {}> {
        option<K extends string, V>(key: K, value: V): Chainable<P & { [key in K]: V }>,
        get: () => P
    }

    declare const config: Chainable;

    const result = config
        .option('foo', 123)
        .option('name', 'type-challenges')
        .option('bar', { value: 'Hello World' })
        .get();
}
