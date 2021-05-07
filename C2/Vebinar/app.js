// Функции

// Задание 1. Есть код, который отвечает за выплату зарплаты сотрудникам. Зарплата состоит из 3-х частей: фиксированная часть (25 000) + процент с продаж (10%) + бонус (10 000), если продажи сотрудника больше или равны 100 000. Нужно переписать этот код с использованием функции.

// Сотрудники:
// Иванов, продал на 100 000
// Петров, продал на 80 000
// Никитин, продал на 150 000

// let salaryIvanov = 25000 + 100000 * 0.1 + 10000;
// let salaryPetrov = 25000 + 80000 * 0.1;
// let salaryNikitin = 25000 + 150000 * 0.1 + 10000;

// console.log("Сотрудник Иванов получает " + salaryIvanov + " руб.");
// console.log("Сотрудник Петров получает " + salaryPetrov + " руб.");
// console.log("Сотрудник Никитин получает " + salaryNikitin + " руб.");

function paySalary(name, sales) {
  const FIXED = 25000;
  const PERCENT = 0.1;
  let bonus = 0;
  if (sales >= 100000) {
    bonus = 10000;
  }
  let salary = FIXED + sales * PERCENT + bonus;
  console.log("Сотрудник " + name + " получает " + salary + " руб.");
}

// paySalary("Иванов", 100000);
// paySalary("Петров", 80000);

// Задание 2. Переписать функцию sendMessage так, чтобы при отсутствии параметра message выводилось "( пустое сообщение )" вместо undefined.

function sendMessage(name, message) {
  console.log("Отправитель: " + name + ". Сообщение: " + (message ? message : "( пустое сообщение )"));
}
// sendMessage("Евгений");

// Директива return

function returnSomething() {
}

let functionResult = returnSomething();
// console.log(functionResult);

// Видимость переменных в функциях

let userName = "Иван";

function sayHelloToUser(userName) {
  alert("Здравствуйте, " + userName);
}

// sayHelloToUser("John");
// console.log(userName);

// Тернарный оператор
// if (a > b) {
//   let c = 0;
// } else {
//   let c = 1;
// }

// let c = a > b ? 0 : 1;
// console.log(a > b ? 0 : 1);

// Function Declaration vs Function Expression

// Задание 3. Написать функцию, которая будет возвращать другую функцию, удваивающую любое полученное значение. Поведение второй функции будет разным в зависимости от типа аргумента: если это число, число умножается на два; если это массив, каждый элемент умножается на два; если строка, то возвращается та же строка, повторённая дважды.

function getDoubleFunction(value) {
  let result;
  if (typeof value === "number" && !isNaN(value)) {
    result = () => value * 2
  } else if (typeof value === "string") {
    result = () => value + value
  } else if (typeof value === "object" && value.length) {
    result = () => {
      value = value.map(arrayValue => arrayValue * 2);
      return value;
    }
  } else {
    result = () =>  "Ошибка ввода";
  }
  return result;
}

let someArray = [13, 8, 22];
let someString = "abcd";
let someNumber = 18;

let double = getDoubleFunction(someArray);
console.log(double());

// Объекты. Свойства и методы

let car = {
  model: "Ford",
  year: 2018,
  signal: function() {
    console.log("beep!");
  }
};

let propName = "model";
// console.log(car[propName]);
// car.signal();

// Задание 4. Добавить объекту свойство цвет (color) со значением black и свойство цена (price) со значением 800 000 и написать функцию, которая будет выводить в консоль все свойства машины (model, year, color, price).

car.color = "black";
car.price = 800000;
car["price"] = 800000;

function presentCar(car) {
  for (let prop in car) {
    if (typeof car[prop] !== "function") console.log(car[prop]);
  }
}

// presentCar(car);

// Ключевое слово this
// Задание 5. Написать для объекта car метод presentCar, аналогичный выше описанной функции presentCar. Внутри метода использовать this.

car.presentCar = function() {
  console.log(`Модель - ${this.model}, год выпуска - ${this.year}, цвет - ${this.color}, цена - ${this.price} руб.`);
}

// car.presentCar();

// Задание 6. Написать для объекта car метод makeDiscount, который принимает в качестве аргумента величину скидки и снижает цену машины на указанную сумму, после чего выводит в консоль новую стоимость.

car.makeDiscount = function(discount) {
  this.price = this.price - discount;
}

car.makeDiscount(50000);
// car.presentCar();

// Конструкторы объектов
// Задание 7. Написать конструктор для объекта car, чтобы упростить создание объектов такого типа. \
// Объект, созданный с помощью конструктора, должен содержать все свойства car (model, year, color, price) \
// и все перечисленные выше методы (signal, presentCar, makeDiscount).

function Car(model, year, color, price) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.price = price;
  this.signal = function() {
    console.log("beep!");
  }
  this.presentCar = function() {
    console.log(`Модель - ${this.model}, год выпуска - ${this.year}, цвет - ${this.color}, цена - ${this.price} руб.`);
  }
  this.makeDiscount = function(discount) {
    this.price = this.price - discount;
  };
}

let car2 = new Car("Audi", 2019, "white", 1200000);
// car2.presentCar();
// car2.signal();

// Прототипное наследование
let employeePrototype = {
  company: "Apple",
  region: "California"
};

let manager = Object.create(employeePrototype);
manager.name = "Steve";
manager.job = "Manager";
manager.company = "Google";
manager.introduce = function() {
  console.log(`Меня зовут ${this.name}, я работаю на должности ${this.job} в компании ${this.company}`);
}

// manager.introduce();

// Задание 8. Найти ошибку в коде

let dragonProto = {
  cave: [],
  fillCave: function(item) {
    this.cave.push(item);
  },
  openCave: function() {
    console.log(this.cave);
  }
}

let yellowDragon = Object.create(dragonProto);
yellowDragon.cave = [];
let redDragon = Object.create(dragonProto);
redDragon.cave = [];

yellowDragon.fillCave("gold");

// yellowDragon.openCave();
// redDragon.openCave();

// Классы
// Пример объявления класса

class Student {
  constructor(name, group) {
    this.name = name;
    this.group = group;
  }

  introduce() {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

// Класс - это функция
console.log(typeof Student); // function

// Наследование классов

// Задание 9. Написать класс Polygon (прямоугольник) с методом countArea, который будет считать его площадь. Затем создать класс Square, который будет наследовать от класса Polygon

class Polygon {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  countArea() {
    return this.width * this.height;
  }
}

class Square extends Polygon {
  constructor(length) {
    super();
    this.width = length;
    this.height = length;
  }
}

// let square = new Square(4);
// console.log(square.countArea());

// Ответы на вопросы

// setTimeout и setInterval
let timeoutId = setTimeout(() => {
  console.log("hello");
}, 5000);

clearTimeout(timeoutId);

let intervalId = setInterval(() => {
  let i = 0;
  while (i < 3) {
    console.log("tick");
    i++;
  }
  clearInterval(intervalId);
}, 1000);