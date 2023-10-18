
// func1 / func2 / func3 ... in program

// MECE = Mutually(상호) Exclusive(배타적) Collectively(전체적으로) Exhaustive(완전한)
// 항목들이 배타적이면서 모였을 때 완전히 전체를 이룸 / 겹치지 않으면서 빠짐없이 나눈 것

// function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calcualtes a value



// 1. Function declaration
// function name(param1, param2)(parameter 인수/매개변수) {body... return;}
// one function === one thing / naming: doSomething, command, verb
// e.g. createCardAndPoint >> createCard, createPoint / function is @ object @ in JS
function printHello() {
    console.log('Hello');
    console.log('good morning !');
}
printHello();

function log(message) {
    console.log(message);
 }
 log('Hello@');
 log(1234);



// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ziwoo = {name: 'ziwoo'};
changeName(ziwoo);
console.log(ziwoo);



// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!')



// 4. Rest parameters (added in ES6)
function printAll(...args) {
    // ... : 배열 형태로 (순차)
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ziwoo');



// 5. Local scope ** (scope: 범위)
let globalMessage = 'global';   // global variable
function printMessage() {   // 밖에서는 안이 보이지 않지만 안에서는 밖이 보인다 ~~ !! ~ 
    let message = 'hello';
    console.log(message);   // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);
}
printMessage();



// 6. return & value
function sum(a, b) {
    return a+b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);



// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 18) {
        // long upgrade logic ...
    }
}
