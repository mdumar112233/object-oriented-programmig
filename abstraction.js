class Animal {
    constructor() {
        
    }
    talk(){
        throw new Error('you must implement talk method')
    }
}

class Cat extends Animal{
    talk(){
        console.log('hey hey');
    }
}

class Dog extends Animal{
    talk(){
        console.log('new dog');
    }
    talks(){
        console.log('dog dog');
    }
}


const myCat = new Cat();
myCat.talk();
const myDog = new Dog();
myDog.talk();

