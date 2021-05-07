// Объект — это неупорядоченная коллекция свойств, где каждое свойство состоит из имени (ключа)
// и ассоциированного с ним значения. Объекты в JavaScript можно называть ассоциативными массивами,
// так как они состоят из пары ключ-значение. Они предназначены для хранения сложных структур данных.

const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};

const obj2 = {
    a: 1,
    hello: 2,
    '': 3,
    123: 4,
    var: 5,
};

const obj1 = {
    a: 1,
    f: function() {
        console.log(1);
    },
};

const obj = {
    myProp: 100,
    1: 200,
};
const key = 'myProp';

obj.myProp; // 100
// obj['myProp']; // 100
// obj[1]; // 200
// obj[key]; // 100

const lang = prompt("Введите название языка программирования", "javascript");

const collection = {
  lang: 'Лучший язык программирования!', // имя свойства будет взято из переменной lang
};
alert(collection.lang); // Лучший язык программирования!, если lang="javascript"

const obj3 = {a: 1};
delete obj3.a;
console.log(obj3); // {}

console.log(lang in collection);

const obj4 = {a: 1, b: 2};
for (let key in obj4) {
    // выводим все названия свойств
    console.log(key);
}

for (let key in obj4) {
    // выводим все значения свойств
    console.log(obj4[key]);
}

