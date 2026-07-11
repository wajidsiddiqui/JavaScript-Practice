class Car {

    constructor(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

    start() {
        console.log(`🚗 ${this.brand} is starting...`);
    }

    drive() {
        console.log(`🚗 ${this.brand} is driving...`);
    }

    stop() {
        console.log(`🛑 ${this.brand} stopped.`);
    }
}

const car1 = new Car("BMW", "Black", 5000000);
const car2 = new Car("Audi", "White", 7000000);

car1.start();
car1.drive();
car1.stop();

console.log("--------------------");

car2.start();
car2.drive();
car2.stop();