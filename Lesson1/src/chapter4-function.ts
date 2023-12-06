// Type Aliases
type stringOrNumber = string |  number;

type Guitarists = {
    name: string;
    isActive: boolean;
    albums: (string | number)[];
}

//Literal types
let myName: 'Nhao' | 'Thay' | 'Nguyen';
myName = 'Nhao';

let myVariable: 'Nhao' | 33 | (string | number)[] | boolean;

// Functions
const add = (a: number, b:number) => {
    return a + b;
}

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function(a, b) {
    return a * b;
}

const addAll = (a: number, b: number, c?:number): number => {
    if (c) {
        return a + b + c;
    }
    return a + b
}

//Rest parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
}
total(1,2,3,4,5);

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

const infinite = () => {
    let i: number = 1;
    while(true){
        i++;
        if (i > 100) break;
    }
};

const isNumber = (value: any): boolean => {
    return value === 'number' ? true : false;
}

const numberOrString = (value: number | string): string => {
    if (isNumber(value)) return 'Number';
    if (typeof value === 'string') return 'String';
    return createError('This should never happen!');
}