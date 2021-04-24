class Animal{
    static category = 'dog';
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    static compare(animal,animal2){
        if(animal.speed > animal2.speed){
            return `${animal.name} is faster`;
        }
        else{
            return `${animal2.name} is faster`;
        }
    }
}

const myRat = new Animal('rat', 23);
console.log(myRat);
console.log(Animal.category);





