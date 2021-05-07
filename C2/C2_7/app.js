// Определение очень простое — если после ключевого слова function есть имя,
// то функция именованная, иначе — анонимная.

// *IIFE — Immediately Invoked Function Expression — «немедленно вызывающееся функциональное выражение»,
// но обычно говорят «самовызывающиеся функции».

(function() {

  alert("Example 1!");

}());

(function() {

  alert("Example 2");

})();

// Callback или функция обратного вызова — функция, которая выполняется в конце операции, \
// когда все остальные операции уже завершены.

// Области использования:
// 1. Когда необходимо выполнить какой-то код по завершении асинхронного действия \
// (загрузка информации из базы данных, например).

// function loadData(url, cb) {
// let result = doSomethingAndGetResult(url)
// onload сработает тогда, когда result полностью прогрузится и колбэк будет вызван
// result.onload = function () {
// cb();
// }
// }
// loadData('url', function(){
// 	// code
// })
// где // code
// }) —  колбэк.

// 2. Как аргумент во многих методах массива.

const arr = [1, 2, 3]
arr.forEach(function(item){
  console.log(item+1)
})

// 3. Как аргумент в методах setTimeout, setInterval и других.

// setTimeout
// setTimeout(func|code, [delay], [arg1], [arg2], ...)
// где func|code — колбэк или кусок кода,
// delay — задержка в милисекундах,
// И далее идут аргументы, которые передаются в колбэк.

function sum(a, b) {
  console.log(a + b);
}
setTimeout(sum, 1000); // задержка 1 секунда

function sum(a, b) {
  console.log(a + b);
}
setTimeout(sum, 1000, 1, 2); // задержка 1 секунда

setTimeout(function (a, b) {
   console.log(a + b);
}, 1000, 1, 2); // задержка 1 секунда



function logNumbers(begin, end) {
    let current = begin;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == end) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
logNumbers(5, 15);
