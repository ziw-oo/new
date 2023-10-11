
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

// 객체 지향 언어: class(구분 / 속성 fields/ 행동 methods) vs object