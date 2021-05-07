// function sayMyName (name) {
//  console.log('My name is ' + name);
// }

const sayMyName = name => {
console.log('My name is ' + name);
}

sayMyName('Aidys');

const logText = text => console.log(text);

const sayHelloWorld = () => console.log('Hello, world!');

const sum = (a, b) => a + b;



const pow = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

const result = pow(5, 3)
console.log(result) // 125

