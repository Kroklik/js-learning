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
let i = 0;
let bananas_count = +prompt('Введите количество бананчиков');
while (i < bananas_count) {
    i++
    if (bananas_count == 1 || i == 1) {
        console.log('1 banana');
    }

    else {
        console.log(`${i} bananas`);
    }
}

// task 2
let number = +prompt("Введите любое число");
let sum_of_even_nums = 0;

if (isNaN(number)) {
  alert("Надо ввести int, а не str");
} else {
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      sum_of_even_nums += i;
    }
  }

  console.log(
    `Сумма четных чисел в промежутке от 0 до ${number}: ${sum_of_even_nums}`
  );
}


// task 3

let num = +prompt('Введите число');
let degree = +prompt('Введите степень');
let result = 1;
if (isNaN(degree) || degree == 0) {
    degree = 2
}

for (let i = 0; i < degree; i++) {
    if (isNaN(num) || num == 0) {
        alert('Вы ввели 0 или str, а надо int');
        result = 'Ошибка'
        break
    }
    else {
    result = result * num }

}

alert(`Ваш результат: ${result}`)
