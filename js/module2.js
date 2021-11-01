// !Модуль 2. Занятие 3. Массивы
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.
// const genres = ['Jazz', 'Blues'];
// console.log(genres);
// genres.push('Rock-&-Roll');
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift('Country', 'Reggy');
// console.log(genres);

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.
// const values = '8 11';
// let rectangularArea = 0;
// function findRectangularArea(values) {
// 	let array = values.split(" ");
// 	rectangularArea = array[0] * array[1];
// 	return rectangularArea;
// }
// console.log(findRectangularArea(values));

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
	
// 	console.log(`#${i + 1} : ${fruits[i]}`);
// }

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log(namesArr);
// console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const array = string.split(" ");
// console.log(array);
// const newArray = array.slice(1, array.length - 1);
// console.log(newArray);
// const resultString = newArray.join(" ");
// console.log(resultString);

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.
// const string = 'Welcome to the future';
// const array = string.split("");
// let newString = "";
// for (let i = array.length - 1; 0 <= i; i--) {
// 	newString += array[i];
// }
// console.log(newString);

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// правильная сортировка
// ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
// сортировка по первому символу
// ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort();

// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     if (langs[i][0] > langs[j][0]) {
//       const tmp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = tmp;
//     }
//   }
// }
// console.log(langs);

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (const number of numbers) {
// 	if(number < min){
// 		min = number;
// 	}
// }
// console.log(min); 


// ::::::::::::::::::::::::::::::::::::: TASK from freeCodeCamp:::::::::::::::::::::::::::::::::::::::::::::::::::::
// Счетчик изменений	Карты
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, «J», «Q», «K», «A»
// Напишете функцию подсчета карт. Он получит card параметр, который может быть числом или строкой, и будет увеличивать или уменьшать глобальную count переменную в соответствии со значением карты (см. Таблицу). Затем функция вернет строку с текущим счетчиком и строку, Betесли счетчик положительный, или Holdесли счетчик равен нулю или отрицателен. Текущий счет и решение игрока ( Betили Hold) должны быть разделены одним пробелом.

// Примеры выходных данных: -3 Hold или 5 Bet

// Совет
// НЕ сбрасывайте countна 0, когда значение равно 7, 8 или 9.
// НЕ возвращайте массив.
// НЕ включайте в вывод кавычки (одинарные или двойные).

// Последовательности карт 2, 3, 4, 5, 6 должны вернуться 5 Bet

// Последовательность карточек 7, 8, 9 должна вернуть строку 0 Hold

// Последовательность карточек 10, J, Q, K, A должна вернуть строку -5 Hold


// var count = 0;
// let message;
// function cc(card) {
//    switch (card) {
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//          count += 1;
//          break;
//       case 10:
//       case 'J':
//       case 'Q':
//       case 'K':
//       case 'A':
//          count -= 1;
//          break;
//    }
//    count += count > 0 ? ' BET' : ' HOLD';
//   return count;
// }
// console.log(cc(2));
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 
// extra - сделать реверс каждого слова не меняя порядок слов
// 1. разбить на массив слов
// 2.1 разбить каждое слово на массив символов
// 2.2 реверснуть
// 2.3 собрать слово в одну строку
// 3. собрать текст с массива слов

// emocleW ot eht erutuf

// const string = 'Welcome to the future';
// let word = '';
// let wordsArray = [];
// let array = string.split(" ");
// for (let i = 0; i < array.length; i++) {
//     word = array[i].split("").reverse().join("");
//    wordsArray.push(word);
// }
// let revString = wordsArray.join(" ");
// console.log(revString);
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// !Модуль 2. Занятие 4. Функции
// =======================================================================================================================
// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;

// const calcBMI = function (weight, height) {
<<<<<<< Updated upstream
//    return Math.ceil(Number.parseFloat(weight.replace(',', '.')) / Number.parseFloat(height.replace(',', '.')) ** 2);
=======
//     let bmi = Number.parseFloat(weight.replace(',', '.')) / Number.parseFloat(height.replace(',', '.')) ** 2;
// 	 return bmi.toFixed(1);
>>>>>>> Stashed changes
//  }
//  console.log(calcBMI('88,3', '1.75')); // 28.8

// =======================================================================================================================
// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// const getMinOfNumbers = function(a, b){
    
// 	 return a < b ? a : b;
	
// }
//  console.log(getMinOfNumbers(2, 5)); // 2
//  console.log(getMinOfNumbers(3, -1)); // -1
//  console.log(getMinOfNumbers(1, 1)); // 1

// ==================================================================================================================
// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

// const getRectArea = function getRectArea(dimensions) {
// let array = dimensions.split(" ");

// return array[0] * array[1];
// }
// console.log(getRectArea('10 6'));
// let x = getRectArea("4 5");
// console.log(x);

// ======================================================================================================================
// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const logItems = function (array) {

// 	for (let i = 0; i < array.length; i++) {
// 		 console.log(`#${i + 1} : ${array[i]}`);
// 	}
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// ======================================================================================================================
// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
// 	let arrayNames = names.split(",");
// 	let arrayPhones = phones.split(",");

// 	for (let i = 0; i < arrayNames.length; i++) {
// 		console.log(`${arrayNames[i]} -- +${arrayPhones[i]}`);
// 	}
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// ======================================================================================================================
// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
// let LargestNumber = [0];

// for (const num of numbers) {
	
// 	if(num > LargestNumber){
// 		LargestNumber = num;
// 	}
// }
// return LargestNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// ======================================================================================================================
// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

// function calAverage(...args) {
// let ave = 0;
// let sumArgs = 0;

// for (let i = 0; i < args.length; i++) {
// sumArgs += args[i];
// ave = sumArgs / args.length;
// }
 
//  return ave;
// }

//  console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// ======================================================================================================================
// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// ======================================================================================================================
// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']