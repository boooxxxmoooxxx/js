/*
* Задание 8.7.1
* Создайте функцию printInfo, которая будет выводить информацию о человеке в формате "Name: <имя>, Age: <возраст>".
* Создайте объект person с двумя свойствами: name и age. Используйте метод call,
* чтобы вызвать функцию printInfo от имени объекта person.
* */

const printInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

const person = {
    name: "John",
    age: 25,
};

printInfo.call(person); // Name: John, Age: 25


/*
Задание 8.7.2
Создайте функцию calculate, которая будет принимать три параметра: a, b и operator.
Функция должна производить математическую операцию между a и b
в зависимости от значения operator (может быть "+", "-", "*" или "/")
и возвращать результат операции. Используйте метод apply,
чтобы вызвать функцию calculate с передачей объекта со значениями a, b и operator
в качестве первого аргумента и массива с тремя значениями [2, 3, "+"] в качестве второго аргумента.
* */

const calculate = (a, b, operator) => {
    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => y === 0 ? 'Division by zeo, oops!' : x / y
    };

    return operations[operator] ? operations[operator](a, b) : 'Invalid operator';
};

const values = [2, 0, "/"];
const result = calculate.apply(null, values);

console.log(result); // Division by zeo, oops!

/*
Задание 8.7.3
Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство age (возраст).
Создайте новый массив, содержащий только тех пользователей, чей возраст больше или равен 18.
Затем создайте новый массив, содержащий только свойства name (имя) каждого пользователя.
* */

const users = [
    {name: "Вася", age: 30},
    {name: "Петя", age: 25},
    {name: "Катя", age: 17},
    {name: "Глаша", age: 13},
];

users.filter(user => user.age > 18)
    .map(user => user.name)
    .forEach(user => console.log(user));

/*
Задание 8.7.4
Создайте функцию setFullName, которая будет устанавливать свойство fullName у переданного ей объекта.
Используйте метод bind, чтобы создать новую функцию setPersonFullName,
которая будет устанавливать fullName для объекта person из предыдущего примера.
Вызовите setPersonFullName с параметром "John Smith" и убедитесь,
что свойство fullName объекта person было изменено соответствующим образом.
* */

console.log(person, "John from 8.7.1")

const setFullName = function (fullName) {
    this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");

console.log(person, `Full Name for person now: ${person.fullName}`);

/*
Задание 8.7.5
Напишите функцию, которая принимает массив чисел и возвращает новый массив,
содержащий только уникальные числа, отсортированные в порядке возрастания.
* */

const numbers = [
    4, 1, 2, 3, 5,
    3, 2, 4, 6, 7,
    8, 1, 9, 0, 10,
    6, 11, 5, 12, 13,
    7, 14, 8, 15, 9, 16,
    17, 10, 18, 19, 0, 20
];


const getSortedUniqueNumbers = (array) => {
    const uniqueNumbersSet = new Set(array);
    return Array.from(uniqueNumbersSet).sort((a, b) => a - b);
}

console.log(getSortedUniqueNumbers(numbers), "Unique & sorted numbers");