"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `${this.name} is ${this.age}`;
    }
}
;
const Dave = new Coder('Dave', 'Fuck', 32);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `${this.name} write ${this.lang}`;
    }
    ;
}
;
const Billy = new WebDev('Mac', 'Billy', 'Rock', 90);
console.log(Billy.getLang());
;
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
;
const Thomas = new Guitarist('Tom', 'Guitar');
/////////////////////////////////////////////////////////////////////
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
;
const John = new Peeps('John');
const Matha = new Peeps('Matha');
const ALa = new Peeps('ALa');
console.log(John.id);
console.log(Matha.id);
console.log(ALa.id);
console.log(Peeps.count);
////////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
    ;
}
;
const MyBand = new Bands;
MyBand.data = ['Nguyen', 'Duy', 'Ta'];
