
// objects, one of JS's data type


// 1. literals and properties
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
};

const ziwoo = {name: 'ziwoo', age: 23}; // 문법
print(ziwoo);

// can add properties later
ziwoo.hasJob = true;
console.log(ziwoo.hasJob);

// can delete properties later
delete ziwoo.hasJob;
console.log(ziwoo.hasJob);

// object = {key : value}; 



// 2. computed properties >> use dot (.) 
// key should be always STRING !
console.log(ziwoo.name);
console.log(ziwoo['name']);
ziwoo['hasJob'] = ture;
console.log(ziwoo.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ziwoo, 'name');
printValue(ziwoo, 'age');



// 3. property value shorthand
const person1 = {name: 'bob', age: 2 };
const person2 = {name: 'steve', age: 3 };
const person3 = {name: 'mark', age: 4 };
const person4 = makePerson('ziwoo', 23);
console.log(person4)

// 4. constructor function
function Person(name, age) {    // object 대문자로 시작하는 함수 사용
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}



// 5. in operator: property existence check (ket in obj)
console.log('name' in ziwoo);
console.log('age' in ziwoo);
console.log('random' in ziwoo);
console.log(ziwoo.random);



// 6. for..in vs for..of / for (key in obj)
console.clear();
for (key in ziwoo) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}


// *    *     *     *     *



// 객체 지향 언어: class(구분 / 속성 fields/ 행동 methods) vs object
// JS >> introduced in ES6 / syntactical sugar over prototype-based inheritance

// 1. class declerations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
speak() {
    console.log(`${this.name}: hello!`)
    }
}


const ziwoo = new Person('ziwoo', 20);
console.log(ziwoo.name);
console.log(ziwoo.age);
ziwoo.speak();



// 2. getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    
    set age(value) {
        // if (value < 0) {
        //      throw Error('age can not be negative);   
        // }
        this._age = value < 0 ? 0 :value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);



// 3. fields (public, privite) >> too soon !
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const Experiment = new Experiment();
console.log(Experiment.publicField);
console.log(Experiment.privateField);



// 4. static properties and methods >> too soon !
class Article {
    static publisher = 'ZWCH';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
Article.printPublisher();



// 5. inheritance / a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());



// 6. class checking: instanceof
console.log(rectangle instanceof Rectangle);    // T
console.log(triangle instanceof Rectangle);     // F
console.log(triangle instanceof Triangle);      // T
console.log(triangle instanceof Shape);         // T
console.log(triangle instanceof Object);        // T