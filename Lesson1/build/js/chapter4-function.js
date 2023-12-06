"use strict";
//Literal types
let myName;
myName = 'Nhao';
let myVariable;
// Functions
const add = (a, b) => {
    return a + b;
};
let multiply = function (a, b) {
    return a * b;
};
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
//Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
total(1, 2, 3, 4, 5);
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (isNumber(value))
        return 'Number';
    if (typeof value === 'string')
        return 'String';
    return createError('This should never happen!');
};
