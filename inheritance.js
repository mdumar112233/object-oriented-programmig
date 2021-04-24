class SmartDevice{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('is charging');
    }
}

class Phone extends SmartDevice{
    constructor(name, price, camera) {
        super(name, price);
        this.camera = camera;
    }
}

class Watch extends SmartDevice{
    constructor(name, price, distance) {
        super(name, price);
        this.distance = distance;
    }
}

class Tablet extends SmartDevice{
    constructor(name, price, isWifi) {
        this.name = name;
        this.price = price;
        this.isWifi = isWifi
    }
}

const samsung = new Phone('samsung', 3232, '8gb');
console.log(samsung);
console.log(samsung.charging());




