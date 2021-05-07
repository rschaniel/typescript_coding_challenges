

type I = GetRequired<{ foo: number, bar?: string }>

const requiredPart: I = { foo: 1 };



const test: I = { foo: 1 };
const test2: I = { foo: 1, bar: 'test' };
const test3: I = { foo: 1, other: 'test' };
const test4: I = { };


// we can't assign undefined to required properties:
type plainType = { foo: number, bar?: string };
const test3: plainType = {
    foo: undefined,
    bar: undefined,
};


type RequiredKey<T> = {
    [K in keyof T]: T[K] & undefined extends never ? K : never;
}[keyof T];

type requiredKeysForI = RequiredKey<{ foo: number, bar?: string }>;
// "foo" | undefined


type GetRequired<T> = {
    [K in RequiredKey<T>]: T[K];
};



type testFoo = number & undefined;
type testBar = (string | undefined) & undefined



type II<T> = {
    [K in keyof T]: T[K] & undefined extends never ? K : never;
}
type IIa = II<{ foo: number, bar?: string }>;




