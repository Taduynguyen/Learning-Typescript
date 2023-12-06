type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two;
let c = a as Three;

let d = <One>'Fuck';
let e = <string | number>'Shit';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addOrConcat(2,2,'concat') as string;
let myVal2: number = addOrConcat(2,2,'concat') as number;

console.log(typeof myVal2);

let ohla = (10 as unknown) as string;

/* The DOM */
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement;
const myImg2 = <HTMLImageElement>document.getElementById('#img');

img.src
myImg.src
myImg2.src;

/* Practice */
const year = document.getElementById("year") as HTMLElement;
const thisYear = new Date().getFullYear().toString();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;