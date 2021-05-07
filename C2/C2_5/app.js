function example(func){
  // вызываем функцию, которую приняли как аргумент
  func();
 // возвращаем функцию
  return function(){
    console.log('internal function')
  }
}

// функция, которую будем передавать как аргумент в функцию example

function argFunc(){
  console.log('function from arguments')
}

// в переменную resultFunc записываем результат выполнения функции example
// функция, которая передаётся как аргумент, должна быть без круглых скобок

const resultFunc = example(argFunc);
// после вызова example() внутри неё будет вызвана функция argFunc, которую мы передали как аргумент, и в консоли будет текст: function from arguments
// вызываем функцию
resultFunc(); // 'internal function


function getSumFunction(a) {
    return function(b) {
        return a + b
    }
};

const sumFunction = getSumFunction(2);

const sum = sumFunction(3)

console.log(sum); // 5
