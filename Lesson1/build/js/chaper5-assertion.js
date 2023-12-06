"use strict";
// convert to more or less specific
let a = 'hello';
let b = a;
let c = a;
let d = 'Fuck';
let e = 'Shit';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let myVal2 = addOrConcat(2, 2, 'concat');
console.log(typeof myVal2);
let ohla = 10;
/* The DOM */
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const myImg2 = document.getElementById('#img');
img.src;
myImg.src;
myImg2.src;
/* Practice */
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
