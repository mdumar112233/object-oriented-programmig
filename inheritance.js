class SmartDevice{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('is charging');
    }
}

class phone extends SmartDevice{
    constructor(name, price, camera) {
        this.name = name;
        this.price = price;
        this.camera = camera;
    }
    charging(){
        console.log('is charging');
    }
}

class Watch {
    constructor(name, price, distance) {
        this.name = name;
        this.price = price;
        this.distance = distance;
    }
}

class Tablet {
    constructor(name, price, isWifi) {
        this.name = name;
        this.price = price;
        this.isWifi = isWifi
    }
}






