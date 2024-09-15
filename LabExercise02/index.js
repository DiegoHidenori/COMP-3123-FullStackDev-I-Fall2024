// Exercise 1 - Rewrite the code block using ES6 syntax
const gretter = (myArray) => {
    let greetText = 'Hello ';
    for (e in myArray) {
        console.log(greetText + myArray[e])
    };
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);


// Exercise 2 - Destructuring assignment syntax and spread operator
function capitalize(s) {
    let [first, ...chars] = s;
    let final = first.toUpperCase();
    final += chars.join('').toLowerCase();
    return final;
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


// Exercise 3 - Use array.proto.map to recreate Exercise 2
const capitalizedColors = (array) => array.map(number => {
    let [first, ...chars] = number;
    let final = first.toUpperCase();
    final += chars.join('').toLowerCase();
    return final;
})
console.log(capitalizedColors(['red', 'blue', 'orangE']));


// Exercise 4 - Use array.proto.filter for values less than 20
var values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(number => number < 20);
console.log(filterLessThan20);


// Exercise 5 - Use array.proto.reduce to calculate the sum and product of an array
var array = [1, 2, 3, 4];
const calculateSum = array.reduce((acc, val) => acc + val, 0);
const calculateProduct = array.reduce((acc, val) => acc * val, 1);
console.log(calculateSum);
console.log(calculateProduct);


// Exercise 6 - Create a Sedan subclass derived from Car class
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());