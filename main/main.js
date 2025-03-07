/* const orders = [
    { id: 1, date: "2023-03-10" },
    { id: 2, date: "2022-12-25" },
    { id: 3, date: "2024-01-01" },
    { id: 4, date: "2024-06-15" }
];

const newOrders = [...orders];

newOrders.sort(function(a, b){
    return new Date(a.date) - new Date(b.date);
});

console.log(orders);
console.log(newOrders);

const payments = [
    {site: 'muzvil.com', sum: 10000, paymentMethod: 'R15513509'},
    {site: 'muzder.net', sum: 8000, paymentMethod: '5469560022044727', info: 'Кулиева Амина Надыровна'},
    {site: 'comevibe.net', sum: 8000, paymentMethod: '5469560022044727', info: 'Кулиева Амина Надыровна'},
    {site: 'muzson.com', sum: 7000, paymentMethod: 'R15142151'},
];

payments.sort((a, b) =>  a.sum - b.sum);

console.log(payments); */


/* const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 }
];

products.forEach(function(product){
    console.log(`Товар: ${product.name}, цена: ${product.price}`);
});

const prices = [100, 200, 300, 400];

const newPrices = prices.map(function(price){
    return price * 1.2;
});

console.log(newPrices);

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 }
];

const filteredProducts = products.filter(function(product){
    return product.price > 700;
});

console.log(filteredProducts);

const numbers = [3, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(function(number){
    return number % 2 === 0;
});

const newNumbers = filteredNumbers.map(function(number){
    return number * 2;
});

console.log(newNumbers); */

/* const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 60 },
    { name: "Charlie", score: 92 },
    { name: "Dave", score: 45 }
];

const filteredStudents = students.filter(function(student){
    return student.score >= 70;
});

const newScore = filteredStudents.map(function(student){
    return { ...student, score: student.score + 10 };
});

console.log(newScore); */
/* 
const employees = [
    { name: "Alice", salary: 3000 },
    { name: "Bob", salary: 5000 },
    { name: "Charlie", salary: 7000 },
    { name: "Dave", salary: 2000 }
];

const filteredSalary = employees.filter((employ) => employ.salary > 4000);
console.log(filteredSalary);
const newSalary = filteredSalary.map((employ) => employ.salary * 1.1);
console.log(newSalary);
const sumSalary = newSalary.reduce((acc, employ) => acc + employ, 0);

console.log(sumSalary);

const user = {
    name: "Alice",
    age: 30,
    address: {
        city: "New York",
        street: "5th Avenue"
    }
};

const newUser = structuredClone(user);
newUser.address.city = 'Los Angeles';
console.log(user);
console.log(newUser);


const orders = [
    { id: 1, date: "2023-03-10" },
    { id: 2, date: "2024-06-15" },
    { id: 3, date: "2024-06-15" },
    { id: 4, date: "2024-06-15" }
];

const newOrders = [...orders];

newOrders.sort(function(a, b) {
    if (new Date(a.date) === new Date(b.date)) {
        return a.id - b.id;
    }
    return new Date(b.date) - new Date(a.date);
});

console.log(newOrders);

 */

/* const abstractCat = {
    legs: 4,
    sayMeow: function() {
        alert('Meow');
    },
};

const cat = {
    __proto__: abstractCat,
    breed: 'Sphinx',
    color: 'red',
    haveTail: true,
    name: 'Tom',
    sayMeow: function() {
        alert('Meow');
    }
};


cat.sayMeow();


const catChild = {
    __proto__: cat,
    name: 'Nick',
};

console.log(catChild.name); */

// catChild.__proto__ = cat;
// cat.__proto__ = abstractCat;

// Object.setPrototypeOf(catChild, cat);
// Object.setPrototypeOf(cat, abstractCat);


/* function Cat() {
    this.breed = 'Sphinx',
    this.color = 'red',
    this.haveTail = true,
    this.name = 'Tom',
    this.sayName = function () {
        alert('this.name');
    }
};

const cat4 = new Cat();
const cat7 = new Cat();
console.log(cat4);
console.log(cat7);

const date = new Date();
console.log(date); */

// DZ 14

/* function Building(street, floars = 10, purpose = 'service') {
    this.street = street;
    this.floars = floars;
    this.purpose = purpose;
    this.addFloar = function() {
        this.floars++;
    };
    this.peopleLiving = 0;
    this.addPeople = function() {
        this.peopleLiving++;
    };
    this.changePurpose = function(newPurpose) {
        this.purpose = newPurpose;
    };
    this.getFloarsNumber = function() {
        return this.floars;
    }
    this.getBuildingInfo = function() {
        const info = {};

        for (let buildingKey in this) {
            if (typeof this[buildingKey] !== 'function') {
                info[buildingKey] = this[buildingKey];
            }
        }
        return info;
    }
}

const build = new Building('Soborna');
console.log(build);
console.log(build.getFloarsNumber());
build.addFloar();
console.log(build.getFloarsNumber());

Building.prototype.color = 'pink';
console.log(build.color);

Building.prototype.changeColor = function(newColor) {
    this.color = newColor;
}

build.changeColor('fuck');

console.log(build.color); */

/* function Cat(breed, color, name) {
    this.breed = breed;
    this.color = color;
    this.name = name;
    this.sayMeow = function(){
        alert('Say meow');
    };
}

const newCat = new Cat('Cat', 'red', 'Tom');
console.log(newCat);

class CatClass {
    constructor(breed, color, name) {
        this.breed = breed;
        this.color = color;
        this.name = name;
    }

    sayMeow() {
        alert('Say Meow');
    };
}

const newCat2 = new CatClass('Cat', 'red', 'Tom');
console.log(newCat2); */

