/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
    }

    accelerate() {
        this.currentSpeed++;
    }

    brake() {
        this.currentSpeed--;
    }

    toString() {
        return `model: ${this.model}, speed: ${this.currentSpeed}`
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const civic = new Car("civic");
civic.accelerate();
civic.accelerate();
civic.brake();
console.log(civic.toString());


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = "electric";
    }

    accelerate() {
        this.currentSpeed++;
        this.currentSpeed++;
    }

    toString() {
        return `Motor: ${this.motor} and  ${super.toString()}`
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const modelX = new ElectricCar("ModelX");
modelX.accelerate();
modelX.accelerate();
modelX.brake();
console.log(modelX.toString());
