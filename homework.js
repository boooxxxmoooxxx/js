/*
*  Задание 7.6.1
*  Напишите проверку, которая позволит определить, является слово палиндромом или нет.
* */

const word = 'довод' // или слово пистолет

const reversedWord = word.toLowerCase()
    .split('')
    .reverse()
    .join('');

isPalindrome = word === reversedWord;

console.log(`Слово "${word}" ${isPalindrome ? 'является' : 'не является'} палиндромом`);

// слово довод - палиндром, слово пистолет - не палиндром
console.log(`Результат: ${isPalindrome}`);

/*
* Задание 7.6.2
* Создайте новый массив и запишите в него только уникальные значения из массива arr.
* Выведите получившийся массив в консоль.
* */

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
let setWithUniqueValuesOnly = new Set(arr);

console.log(setWithUniqueValuesOnly);

/*
* Задание 7.6.4
* С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики».
* Выведите результат в консоль.
* */

const output = [];
for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        if (i % 2 === 0 && j % 2 === 0) {
            row.push('x');
        } else {
            row.push('o');
        }
    }
    output.push(row.join(' '));
}
console.log(output.join('\n'));

/*
*Задание 7.6.5
* Есть объект obj. В одном из ключей объекта — массив.
* Добавьте в новый массив arrValues значения всех ключей объекта.
* Если значение — массив, добавьте каждый элемент в массив arrValues.
* */

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (const key in obj) {
    if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
            arrValues.push(obj[key][i]);
        }
    } else {
        arrValues.push(obj[key]);
    }
}

console.log(arrValues);

/*
* Задание 7.6.3
* Запросите у пользователя любое число.
* На основании ответа создайте массив и заполните его числами от нуля до введённого числа.
* Не забудьте привести полученное от пользователя значение к типу number.
* */


const readline = require('node:readline'); // если в консоли браузера - prompt('Введите любое число: ');
const array = [];

const scanner = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);

scanner.question(`Введите любое число \n`, input => {
        const number = parseInt(input, 10);

        for (let i = 0; i <= number; i++) {
            array.push(i);

        }
        console.log(`Массив от 0 до ${number}: [${array.join(', ')}]`);

        scanner.close();
    }
);

