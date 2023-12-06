"use strict";
// Index Signatures
;
const todayTransaction = {
    Pizza: -10,
    Book: -5,
    Job: 50,
    Love: 4343
};
console.log(todayTransaction.Book);
console.log(todayTransaction['Pizza']);
let prop = 'Pizza';
console.log(todayTransaction[prop]);
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todayTransaction));
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
;
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'classes');
const monthIncome = {
    salary: 1231,
    bonus: '43242',
    sidehustle: 3231
};
for (const revenue in monthIncome) {
    console.log(monthIncome[revenue]);
}
