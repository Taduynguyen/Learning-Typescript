class Coder {

    secondLang!: string

    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `${this.name} is ${this.age}`
    }
};

const Dave = new Coder ('Dave', 'Fuck', 32);

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string, 
        age: number, 
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `${this.name} write ${this.lang}`
    };
};

const Billy = new WebDev('Mac', 'Billy', 'Rock', 90);
console.log(Billy.getLang());
/////////////////////////////////////////////////////////////////////
 
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
};

class Guitarist implements Musician {
    constructor(
        public name: string, 
        public instrument: string
    ) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
};

const Thomas = new Guitarist('Tom', 'Guitar');
/////////////////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0;
    public id: number

    constructor(
        public name: string,
        
    ) {
        this.name = name;
        this.id = ++Peeps.count;
    }
};

const John = new Peeps('John');
const Matha = new Peeps('Matha');
const ALa = new Peeps('ALa');
console.log(John.id);
console.log(Matha.id);
console.log(ALa.id);
console.log(Peeps.count);
////////////////////////////////////////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string'))
        {
            this.dataState = value;
            return;
        } else {
            throw new Error('Param is not an array of strings');
        }
    };
};

const MyBand = new Bands;
MyBand.data = ['Nguyen', 'Duy', 'Ta'];