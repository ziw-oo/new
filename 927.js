// 1. string concatenation
console.log('my' + 'cat');
console.log('1' + '2');
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("ziwoo's \n\tbook");



// 2. numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);



// 3. increment & decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter ++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);



// 4. assignment operators
let x = 3;
let y = 6;

console.log(x += y);     // x = x + y;
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);




// 5. comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater than or equal



// 6. logical operators: || (or), $$ (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first falsy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

// nullable ...

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😎');
    }
    return true;
}

// ! (not)
console.log(!value1);



// 7. equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion      > > > 더 사용하길 권장, ""바로 그것"" 인가 아닌가, 타입까지 동일해야, 강한 확인
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// object equality by reference
const ziwoo1 = { name: 'ziwoo' };
const ziwoo2 = { name: 'ziwoo' };
const ziwoo3 = ziwoo1;
console.log(ziwoo1 == ziwoo2);
console.log(ziwoo1 === ziwoo2);
console.log(ziwoo1 === ziwoo3);



// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);