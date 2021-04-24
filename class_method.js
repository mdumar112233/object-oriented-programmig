class Hero{
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        if(this.power){
            return this.power;
        }
        else{
            return 'I have no power'
        }
    }
    goForGrocery(){
        if(this.power){
            console.log(this.getPower());
        }
        return 'price is  too heigh, i can not buy'
    }
}

const newHero = new Hero('batman', 'hello');
console.log(newHero);
console.log(newHero.getPower());
console.log(newHero.goForGrocery());