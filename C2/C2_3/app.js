// function sum() {
//
//   const result = 1 + 2;
//
//   console.log(result);
//
// };
//
// const sum = function() {
//
//   const result = 1 + 2;
//
//   console.log(result);
//
// };

func1(); // ошибки нет
// func2(); // ошибка

function func1(a, b) {
  console.log('function 1 - FD');
}

const func2 = function() {
  console.log('function 2 - FE');
};

func1(); // ошибки нет
func2(); // ошибки нет
