// var name = prompt('Введите ваше имя')
// var age = prompt('Введите ваш возраст')
// var zadacha_1 = prompt('Решите пример: 2 + 7')
// var zadacha_2 = prompt('Решите пример: 20 - 7')
// var zadacha_3 = prompt('Решите пример: 20 * 2')
// var zadacha_4 = prompt('Решите пример: 20 / 2')
// var zadacha_5 = prompt('Решите пример: 20 % 6')

// console.log('Меня зовут ' + name);
// console.log('Мне ' + age);
// console.log('Пример 1: 2 + 7 = 9 Ваш ответ: ' + zadacha_1);
// console.log('Пример 2: 20 - 7 = 13 Ваш ответ: ' + zadacha_2);
// console.log('Пример 3: 20 * 2 = 40 Ваш ответ: ' + zadacha_3);
// console.log('Пример 4: 20 / 2 = 10 Ваш ответ: ' + zadacha_4);
// console.log('Пример 5: 20 % 6 = 2 Ваш ответ: ' + zadacha_5);
// alert('Откройте консоль!')

// // Задание 2

// var X, Y, Z, res;
// X = prompt('Введите 1 число');
// Y = prompt('Введите 2 число');
// Z = prompt('Введите 3 число');

// res = parseInt(X) + parseInt(Y) + parseInt(Z) / 3
// console.log('Среднее арифметическое: ' + res);

// Домашка №2

// var age = +prompt('Введите свой возраст')

// if (age <= 18) {
//     alert('Вы еще молоды. вам надо учиться');
// }

// else if (age <= 50 && age > 18) {
//     alert('Вам нужно работать')
// }

// else if (age <= 59 && age > 50) {
//     alert('Вам скоро на пенсию')
// }

// else if (age <= 100 && age > 59) {
//     alert('Вы на пенсии');
// }

// else if (age > 100) {
//     alert('Вы уже в гробу. Я не знаю как вы это пишете');
// }

// else {
//     alert('Что то пошло не так');
// }

// var num = +prompt('Введите время')

// if (num <= 6 && num >= 0) {
//     switch (num) {
//         case 1:
//             alert('Час ночи')
//             break
//         case 5, 6:
//             alert('Пять часов ночи')
//             break
//         case 0:
//             alert('Двенадчать часов ночи')
//             break
//         default:
//             alert(num + ' Часа ночи')

//     }
// }

// else if (num >= 7 && num <= 10 ) {
//     alert(num + ' Часов утра');
// }

// else if (num >= 11 && num <= 17 ) {
//     switch (num) {
//         case 13:
//             alert('Час дня');
//             break
//         case 14:
//             alert('Два часа дня')
//             break
//         case 15:
//             alert('Три часа дня')
//             break
//         case 16:
//             alert('Четыре часа дня')
//             break
//         case 17:
//             alert('Пять часов дня')
//             break
//         default:
//             alert(num + ' Часа(ов) дня');
//     }
// }

// else if (num >= 18 && num <= 23) {
//     switch (num) {
//         case 18:
//             alert('Шесть часов вечера');
//             break
//         case 19:
//             alert('Семь часов вечера');
//             break
//         case 20:
//             alert('Восемь часов вечера');
//             break
//         case 21:
//             alert('Девять часов вечера');
//             break
//         case 22:
//             alert('Десять часов вечера');
//             break
//         case 23:
//             alert('Одиннадцать часов вечера');
//             break
//         default:
//             alert('Что то пошло не так')
//     }
// }

// else {
//     alert('Что то пошло не так')
// }

// var number1 = +prompt('Введите 1 число')
// var number2 = +prompt('Введите 2 число')
// var number3 = +prompt('Введите 3 число')

// if (number1 > number2 && number1 < number3) {
//     alert(number1);
// }
// else if (number2 > number1 && number2 < number3) {
//     alert(number2);
// }
// else if (number3 > number1 && number3 < number2) {
//     alert(number3);
// }

// else if (number1 < number2 && number1 > number3) {
//     alert(number1);
// }

// else if (number2 < number1 && number2 > number3) {
//     alert(number2);
// }

// else if (number3 < number1 && number3 > number2) {
//     alert(number3);
// }
// else {
//     alert('ошибка');
// }

// hw 3

// task 1
// let i = 0;
// let bananas_count = +prompt('Введите количество бананчиков');
// while (i < bananas_count) {
//     i++
//     if (bananas_count == 1 || i == 1) {
//         console.log('1 banana');
//     }
//
//     else {
//         console.log(`${i} bananas`);
//     }
// }

// task 2
// let number = +prompt("Введите любое число");
// let sum_of_even_nums = 0;
//
// if (isNaN(number)) {
//   alert("Надо ввести int, а не str");
// } else {
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 == 0) {
//       sum_of_even_nums += i;
//     }
//   }
//
//   console.log(
//     `Сумма четных чисел в промежутке от 0 до ${number}: ${sum_of_even_nums}`
//   );
// }
//
//
// // task 3
//
// let num = +prompt('Введите число');
// let degree = +prompt('Введите степень');
// let result = 1;
// if (isNaN(degree) || degree == 0) {
//     degree = 2
// }
//
// for (let i = 0; i < degree; i++) {
//     if (isNaN(num) || num == 0) {
//         alert('Вы ввели 0 или str, а надо int');
//         result = 'Ошибка'
//         break
//     }
//     else {
//     result = result * num }
//
// }
//
// alert(`Ваш результат: ${result}`)


// hw 4

// task 1
// current_year = +prompt('Введите текущий год')
// name = prompt('Введите ваше имя')
// birth_year = prompt('Введите ваш год рождения')
//
// function return_info(current_year, name, birth_year) {
//     user_age = (current_year - birth_year);
//     return `${name}, Ваш возраст ${user_age}`
// }
//
// alert(return_info(current_year, name, birth_year))
//
// // task 2
//
// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function randomOperator() {
//     let max = 4
//     let min = 1
//     randomOp = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (randomOp === 1) {
//         return '+'
//     } else if (randomOp === 2) {
//         return '-'
//     } else if (randomOp === 3) {
//         return '/'
//     } else if (randomOp === 4) {
//         return '*'
//     }
// }
//
//
// let minNumber = +prompt('Введите минимальный диапазон')
// let maxNumber = +prompt('Введите максимальный диапазон')
// let tasksQuantity = +prompt('Введите кол-во примеров которое хотите получить');
// for (let i = 0; i < tasksQuantity; i++) {
//     let firstNum = rand(minNumber, maxNumber)
//     let secondNum = rand(minNumber, maxNumber)
//     let solve = 0;
//     let operator = randomOperator()
//     switch (operator) {
//         case '+':
//             solve = (firstNum + secondNum)
//             console.log(solve)
//             break
//         case '-':
//             solve = (firstNum - secondNum)
//             console.log(solve)
//             break
//         case '/':
//             solve = (secondNum / secondNum)
//             console.log(solve)
//             break
//         case '*':
//             solve = (firstNum * secondNum)
//             console.log(solve)
//             break
//     }
//     let task = (`${firstNum} ${operator} ${secondNum}`)
//     let answer = +prompt(`${task}`)
//     let word = answer === solve ? 'Молодец' : 'Холодец'
//     alert(`${task} = ${solve}. Ваш ответ: ${answer}. Вы ${word}`)
// }

// hw5
// task 1

// userObject = {
//
// }
//
// for (let i = 1; i <= 10; i++) {
//     let name = prompt("Введите имя");
//     let age = prompt('Сколько вам лет');
//     userObject[i] = {
//         age: age,
//         name: name,
//         id:i
//     }
//     console.log(`Пользователь: ${i}`)
//     console.log(`Имя: ${name}`)
//     console.log(`Возраст: ${age}`)
// }

// hw 6
// task 1

// let cht = []
// let ncht = []
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// for (let i of array) {
//     if (i % 2 === 0) {
//         cht.push(i)
//     } else {
//         ncht.push(i)
//     }
// }
//
// console.log(`Четные ${cht}`)
// console.log(`Не четные ${ncht}`)
//
// myList = []
//
// for (let i = 0; i < Infinity; i++) {
//     let word = prompt('Введите команду')
//
//     function check_add_del_or_empty() {
//         if (word.startsWith('add, ')) {
//             return 'add'
//         } else if (word.startsWith('del, ')) {
//             return 'del'
//         } else {
//             return 'empty'
//         }
//     }
//
//     let func = check_add_del_or_empty()
//
//     if (word === 'stop') {
//         break
//     }
//
//     if (func === 'add') {
//         let adding_word = word.split('add, ')[1]
//         myList.push(adding_word)
//     }
//     else if (func === 'del') {
//         let deleting_word = word.split('del, ')[1];
//         let index = myList.indexOf(deleting_word); // Метод indexOf я нашел в интернете.
//         if (index !== -1)  {
//             myList.splice(index, 1)
//         }
//         // также посмотрел что indexOf возвращает -1 если он ничего не найдет
//     }
//     else {
//         alert('Вы не ввели add или del')
//     }
//     console.log(myList)
// }
//

// Получаем элементы body и палитры
const body = document.querySelector('body');
const palette1 = document.querySelector('.palette1');
const palette2 = document.querySelector('.palette2');
const pallette_1_colors = palette1.querySelectorAll('.color')
const pallette_2_colors = palette2.querySelectorAll('.color')
const close_1 = palette1.querySelector('.close');
const close_2 = palette2.querySelector('.close');
const squares = document.querySelectorAll('.box');

pallette_1_colors.forEach(div => {
    div.addEventListener('click', () => {
        body.classList.remove('color-red', 'color-yellow', 'color-blue', 'color-black', 'color-white');
        if (div.classList.contains('color-red')) {
            body.classList.toggle('color-red');
        } else if (div.classList.contains('color-yellow')) {
            body.classList.toggle('color-yellow');
        } else if (div.classList.contains('color-blue')) {
            body.classList.toggle('color-blue');
        } else if (div.classList.contains('color-black')) {
            body.classList.toggle('color-black');
        }
    });
});

close_1.addEventListener('click', () => {
    body.classList.add('color-white');
})

pallette_2_colors.forEach(div => {
    div.addEventListener('click', () => {
        squares.forEach(square => {square.classList.remove('color-green', 'color-purple', 'color-orange', 'color-pink', 'color-white')})
        if (div.classList.contains('color-green')) {
            squares.forEach((square) => {square.classList.toggle('color-green')})
        }else if (div.classList.contains('color-purple')) {
            squares.forEach((square) => {square.classList.toggle('color-purple')})
        }else if (div.classList.contains('color-orange')) {
            squares.forEach((square) => {square.classList.toggle('color-orange')})
        }else if (div.classList.contains('color-pink')) {
            squares.forEach((square) => {square.classList.toggle('color-pink')})
        }
    });
});

close_2.addEventListener('click', () => {
    squares.forEach((square) => {square.classList.toggle('color-white')})
})