class Tiger {
    #speed = 100;
    constructor(name) {
        this.name = name;
    }
    run(){
        console.log(`I ma ${this.name}, I am running speed ${this.#speed}`);
    }
}


const royal = new Tiger('royal');
console.log(royal);
console.log(royal.run());