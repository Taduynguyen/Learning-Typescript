// Index Signatures

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
    readonly [index: string]: number,
    Pizza: number,
    Book: number,
    Job: number,
};

const todayTransaction: TransactionObj = {
    Pizza: -10,
    Book: -5,
    Job: 50,
    Love: 4343
};

console.log(todayTransaction.Book);
console.log(todayTransaction['Pizza']);

let prop: string = 'Pizza';
console.log(todayTransaction[prop]);

const todayNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total;
};

console.log(todayNet(todayTransaction));

////////////////////////////////////////////        

type Student = {
    // [key: string]: number | string | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[],
};

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
};

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'classes');

/////////////////////////////////////////////

// interface Incomes {
//     [key: string]: string | number
// };

type Streams = 'salary' | 'bonus' | 'sidehustle'

type stringOrNumber1 = string | number;

type Incomes = Record<Streams, stringOrNumber1>

const monthIncome: Incomes = {
    salary: 1231,
    bonus: '43242',
    sidehustle: 3231
}

for (const revenue in monthIncome) {
    console.log(monthIncome[revenue as keyof Incomes]);
}
 