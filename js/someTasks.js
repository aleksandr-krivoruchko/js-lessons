// !=================-НАХОЖДЕНИЕ САМОГО МАЛЕНЬКОГО ЧИСЛА-============================
// const marks = [50, 20, 10, 5, 7, 3, 100];

// // 1 способ
// console.log(Math.min(...marks));

// // 2 способ
// const findMin = function (marks) {
// 	let min = marks[0];
// 	for (const mark of marks) {
// 		if (mark < min) {
// 			min = mark;
// 		}
// 	}
// 	return min;
// }
// console.log(findMin(marks));

// console.log("welcome to js world"[0]);

// !==============УДАЛЕНИЕ ДУБЛИКАТОВ (УНИКАЛЬНЫЕ ЗНАЧЕНИЯ)==========================
// получить новый массив с уникальными значениями
// const array = [1, 2, 3, 3, 4, 5, 6, 6, 7];
// const str = "abcdef";
// const array1 = [...str];
// 1 способ (через фильтр)
// const uniqArray = array.filter((num, i) => array.indexOf(num) === i); //индексОф возвращает индекс значения первый раз встреченного
// console.log(uniqArray);

// 2 способ (через сет)
// console.log(new Set(array)); //обьект уник.значений
// console.log([...new Set(array)]);//массив уник.значений распылением
// console.log(Array.from(new Set(array)));//массив уник.значений методом Array

// 3 способ (через редьюс)
// const uniqArr = array.reduce((uniq, item) => {
//   return uniq.includes(item) ? uniq : [...uniq, item]; //или запушить еще можно в новый массив
// }, []);
// console.log(uniqArr);

// 4 способ (через ключи обьекта)
// const arrayLetters = [...array1];
// let temp = {};
// arrayLetters.forEach((item, i) => (temp[item] = i));
// console.log(Object.keys(temp));

// !=========УДАЛЕНИЕ ВСЕХ ЭЛЕМЕНТОВ МАССИВА===================

// let cities = ['pavlograd', 'ternovka', 'pershik'];
// cities.length = 0;
// console.log(cities);

// !==========ЗАГЛАВНАЯ БУКВА СТРОКИ===========================

// const str = 'я изучаю язык';
// const capitalizeFirstLetter = (str) =>{
// 	return str[0].toUpperCase() + str.substring(1);//1 СПОСОБ

// 	return str[0].toUpperCase() + str.slice(1, str.length);//2 СПОСОБ

//   return str.replace(str[0], str[0].toUpperCase());//3 СПОСОБ
// }
// console.log(capitalizeFirstLetter(str));

// !=========ПОЛУЧИТЬ ЦЕЛОЕ ЧИСЛО============================
// let num = 123.456;

// 	// 1 СПОСОб
// 	console.log(Math.trunc(num));

// 		// 2 СПОСОб
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

// 		// 3 СПОСОб
// console.log(parseInt(num, 10));

// 		// 4 СПОСОб
// console.log(num.toFixed(0));

// !============ПРОВЕРКА НА ЦЕЛОЕ ЧИСЛО========================
// 1 СПОСОБ
// console.log(Number.isInteger(num));

// 2 СПОСОб
// if (Math.floor(num) === num) {
// 	console.log(`Это целое число: ${num}`);
// } else {	console.log(`Это HEцелое число: ${num}`);
// }
// // 3 СПОСОб(остаток от деления на единицу)
// if (num % 1 === 0) {
// 	console.log(`Это целое число: ${num}`);
// } else {	console.log(`Это HEцелое число: ${num}`);
// }
// // 4 СПОСОб (остаток от деления на единицу 0 приводится к фолс, а ! делает тру)
// if (!num % 1) {
// 	console.log(`Это целое число: ${num}`);
// } else {	console.log(`Это HEцелое число: ${num}`);
// }

// !=============ПРОВЕРКА НА СОДЕРЖАНИЕ ПОДСТРОКИ В СТРОКЕ=============
// const string = 'I love this game';
// const substring = 'this';

// 1 СПОСОБ
// console.log(string.includes(substring));
// 2 СПОСОБ
// console.log(string.indexOf(substring) !== -1);

// !===============ПОМЕНЯТЬ МЕСТАМИ ПЕРЕМЕННЫЕ========================
// let a = 10;
// let b = 'age';
// console.log(a,b);

//1 способ//работает благодаря возможности деструктуризировать массивы
// [a, b] = [b, a];
// console.log(a,b);

//2 способ(метод узырька)
// let c = a;
// a = b;
// b = c;
// console.log(a,b);

// !============ПРОВЕРКА НА ПУСТОЙ МАССИВ или ОБЬЕКТ=======================
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const keys = Object.keys(book);

// if (keys.length === 0) {
// 	console.log(`пусто`);
// } else {console.log(`HE пусто`);}

// const arr = [];
// if (arr.length === 0) {
// 	console.log(`пусто`);
// } else {console.log(`HE пусто`);}

// !============СЛУЧАЙНОЕ ЧИСЛО=======================

// console.log(Math.random() * (10 - 1) + 1);

// !============деструктуризация с параметром Rest=======================
// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);//1,2
// console.log(arr);//3,4,...

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function removeFirstTwo(list) {
//   const [a, b, ...arr] = list;
//   return arr;
// }
// console.log(removeFirstTwo(source));//3,4,5,6,7,8,9,10

// console.log(source);//1, 2, 3, 4, 5, 6, 7, 8, 9, 10

//!============РЕКУРСИЯ =======================
// Ссылка на обьяснение рекурсии в фрибуткемпе
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-countdown/305925/2
// Например, допустим, вы хотите написать рекурсивную функцию, которая возвращает массив, содержащий числа от 1 до n. Эта функция должна принять аргумент n, представляющий конечное число. Затем она должна будет вызывать себя с постепенно уменьшающимися значениями n, пока не достигнет 1. Вы можете написать функцию следующим образом:

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));
// / В консоль будет выведено значение [1, 2, 3, 4, 5].
// Сначала это кажется нелогичным, поскольку значение n уменьшается, но значения в конечном массиве увеличиваются. Это происходит потому, что пуш происходит последним, после возврата рекурсивного вызова. В момент, когда n заталкивается в массив, countup(n - 1) уже был оценен и вернул [1, 2, ..., n - 1].
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);//замена пуша на аншифт и вуаля
//     return countArray;
//   }
// }
// console.log(countdown(5));

// !===========================Использование рекурсии для создания диапазона чисел==============================
// Мы определили функцию rangeOfNumbersс двумя параметрами. Функция должна возвращать массив целых чисел, который начинается с числа, представленного startNumпараметром, и заканчивается числом, представленным endNumпараметром. Начальный номер всегда будет меньше или равен конечному номеру. Ваша функция должна использовать рекурсию, вызывая себя, и не использовать какие-либо циклы. Он также должен работать в тех случаях, когда оба startNumи endNumсовпадают.

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     var numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }

// !============codewars task 1=======================

// function likes(names) {
//   if (names.length === 0) {
// 	  return `no one likes this`;
//   } else if (names.length === 1){
// 	  	  return `${names[0]} likes this`;
//   }
// 	 else if(names.length === 2){
// 	  	  return `${names[0]} and ${names[1]} like this`;
//  } else if(names.length === 3){
// 	  	  return `${names[0]}, ${names[1]} and ${names[2]} like this`;

// }  else {
// 	return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// }
// }

// let names = ["Jacob", "Alex"];
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(likes(names));

// !============codewars task 2=======================
// function filter_list(arrayM) {
// return arrayM.filter(item => Number(item) === item);
// }
// console.log(filter_list([1,2,'aasf','1','123',123]));

// // filter_list([1,2,'a','b']) == [1,2]
// // filter_list([1,'a','b',0,15]) == [1,0,15]
// // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// console.log(Number.isNaN(2));

// todo============codewars task 3=======================
// В небольшом городе население в начале года составляет p0 = 1000 человек. Население регулярно увеличивается на 2 процента в год,
//  кроме того, в город приезжает 50 новых жителей в год. Сколько лет нужно городу, чтобы его население стало больше или равно p = 1200 жителей?
// В конце первого года будет:
// 1000 + 1000 * 0,02 + 50 => 1070 жителей.
// В конце 2-го года будет:
// 1070 + 1070 * 0.02 + 50 => 1141 житель (** число жителей - целое число **)
// В конце 3-го года будет:
// 1141 + 1141 * 0.02 + 50 => 1213
// Для этого потребуется целых 3 года.
// Более общие заданные параметры:
// p0, percent, aug (жители, прибывающие или убывающие каждый год), p (население, которое нужно превзойти).
// функция nb_year должна вернуть n количество полных лет, необходимых для того, чтобы численность населения была больше или равна p.
// aug - целое число, percent - положительное или нулевое плавающее число, p0 и p - положительные целые числа (> 0).
// Примеры:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Примечание:
// Не забудьте преобразовать параметр percent в проценты в теле вашей функции: если параметр percent равен 2, вы должны преобразовать его в 0.02.

// function nbYear(p0, percent, aug, p) {
//  let acc = p0;

// for (let i = 0; i < 100; i++) {
// 	acc = acc + acc * (percent / 100) + aug;
// 	console.log(acc);
// 	if (acc >= p) {
// 		return i + 1;
// 	}
// }
// 	}

// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1000, 2, 50, 1200));

// !============codewars task 4=======================
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(str) {
// 	const letters = str.split("");
// 	let arr = [];

// 	for (let i = 0; i < letters.length; i++) {

// 		arr.push(letters[i].toUpperCase() + letters[i].toLowerCase().repeat(i));

// 	}
// 	return arr.join("-");
// }

// console.log(accum("RqaEzty"));

// !============codewars task 5=======================
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// function countSmileys(smiles) {

// 	const arr = smiles.filter(smile =>
// 		   smile.includes(':' && ')')
// 		|| smile.includes(';' && ')')
// 		|| smile.includes(':' && 'D')
// 		|| smile.includes(';' && 'D'));
// 	console.log(arr);
// 	return arr.filter(nose => nose.length === 2 || nose.includes('~') || nose.includes('-')).length;
// }

// console.log(countSmileys([':)', ';(', ';}', ':-D', ':*)', '{}']));//2
// console.log(countSmileys([';D', ':-(', ':-)', ';~)']));//3
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));//1

// !============codewars task 6=======================

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// function solution(str, ending) {
// 	return str.endsWith(ending);
// }
// console.log(solution('abc', 'bc'));

// !============codewars task 7=======================
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.toJadenCase = function () {

// 		 return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1, word.length)).join(' ');
// }

// const ghj = new String( "How can mirrors be real if our eyes aren't real" );

// console.log(ghj.toJadenCase());

// !=============codewars task 8=======================
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// function sumTwoSmallestNumbers(numbers) {
// 	return numbers.sort((a,b) => a - b)[0] + numbers.sort((a,b) => a - b)[1];

// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

// !=============codewars task 9=======================
// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать истину, если треугольник можно построить со сторонами заданной длины, и ложь в любом другом случае.
// (В этом случае для принятия все треугольники должны иметь поверхность больше 0).

// function isTriangle(a,b,c){
// 	return a + b > c && c + b > a && a + c > b;
// }

// console.log(isTriangle(10, 2, 2));

// !=============codewars task 10=======================
// Задана строка слов, вам нужно найти слово, набравшее наибольшее количество очков.
// Каждая буква слова набирает очки в соответствии с ее положением в алфавите: a = 1, b = 2, c = 3 и т.д.
// Вам нужно вернуть слово, набравшее наибольшее количество очков, в виде строки.
// Если два слова набрали одинаковое количество очков, верните слово, которое встречается раньше всех в исходной строке.
// Все буквы будут строчными, а все вводимые данные - действительными.

// ? my version
// function high(x){
// 	const arr1 = x.split(' ');
// 	let arr2 = [];
// 	arr1.forEach(word => {
// 		arr2.push(word.split('').map(letter => (letter.charCodeAt() - 96)).reduce((acc, i) => { return acc + i }, 0));
// });
// 	const idx = arr2.indexOf(Math.max(...arr2));
// 	return arr1[idx];
// }

// ? the best version
// function high(s){
//   let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }
// console.log(high('man i need a taxi up to ubud'));//taxi
// console.log(high('what time are we climbing up the volcano'));//volcano

// !=============codewars task 11=======================
// Панграмма - это предложение, в котором каждая буква алфавита встречается хотя бы один раз. Например, предложение "The quick brown fox jumps over the lazy dog" является панграммой, потому что в нем хотя бы один раз используются буквы A-Z (регистр не имеет значения).
// Получив строку, определите, является ли она панграммой. Верните True, если это так, и False, если нет. Игнорируйте цифры и пунктуацию.

// ? my version
// function isPangram(string){
// 	const uniq = [...new Set(string.toLowerCase().split(''))]
// 	             .filter(l => l !== ' ' && l !== ',' && l !== ':' && l !== '.' && Number.isNaN(Number(l))).sort();

// 	return uniq[uniq.length - 1].charCodeAt() - uniq[0].charCodeAt() === 25 && uniq.length === 26;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("abcdefghijklmopqrstuvwxyz"));

// ? the best version
// function isPangram(string){
//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every((x) => string.toLowerCase().includes(x));
// }

// !=============codewars task 12=======================
// Ваша задача - написать функцию, которая увеличивает строку, чтобы создать новую строку.
// Если строка уже заканчивается числом, то это число должно быть увеличено на 1.
// Если строка не заканчивается числом, то к новой строке должно быть добавлено число 1.
// Примеры:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Внимание: Если в числе есть ведущие нули, необходимо учитывать количество цифр.

// function incrementString (string) {
// string = "vvdv44";
// 	// const incrementedString = string.endsWith(!Number.isNaN(Number(string[string.length - 1])));
//  const q = Number.parseInt(string);
//  console.log(q);
//  	return Number.isNaN(Number.parseInt(string)) ? string + '1': string + (Number.parseInt(string) + 1);

// }

// console.log(incrementString ('foo33'));
// console.log(Number.parseInt("12vvdv44"));

//!      ЗАМЫКАНИЕ
// function generateUrl(dom) {
//   return function (url) {
//     console.log(`https://${url}.${dom}`);
//   };
// }

// const qqq = generateUrl("com");

// qqq("google");
// qqq("njsdhb");

// function sum(x) {
//   return function (y) {
//     console.log(x + y);
//   };
// }
// const calc = sum(55);

// calc();

// !           Написать свою функцию bind

// const person = {
//   name: "Samuel",
//   age: 36,
//   job: "surveyor",
// };
// const student = {
//   name: "Nikita",
//   age: 18,
//   job: "student",
// };

// function logPerson(hours, days) {
//   console.log(
//     `Person ${this.name} is ${this.age} years old works as a ${this.job} ${hours}/${days}`
//   );
// }
// function qweCall() {
//   console.log("Я написал свою функцию с привязкой контекста");
// }
// logPerson.call(person, 45, 5);
// logPerson.call(student, 12, 6);
// const bindingPerson = logPerson.bind(person);
// bindingPerson(24, 7);

// function bind(context, callback) {
//   return function () {
//     callback.call(context, ...arguments);
//   };
// }

// const myBind = bind(person, logPerson);
// myBind(24, 7);

// !==========Вернуть количество людей онлайн(freeBootCamp)==================
// function countOnline(usersObj) {
// 	let count = 0;

// 	for (let user in usersObj) {

// if (usersObj[user].online) {
// 	count += 1;
// }
// }
// return count;
// }

// console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }));
// console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }));

// !===============Вернуть массив друзей с добавленным из аргумента другом онлайн(freeBootCamp)==========================
// let user = {
//   name: "Kenneth",
//   age: 28,
//   data: {
//     username: "kennethCodesAllDay",
//     joinDate: "March 26, 2016",
//     organization: "freeCodeCamp",
//     friends: ["Sam", "Kira", "Tomo"],
//     location: {
//       city: "San Francisco",
//       state: "CA",
//       country: "USA",
//     },
//   },
// };

// function addFriend(userObj, friend) {
//   //   const q = [...userObj.data.friends];
//   const q = Array.from(userObj.data.friends);
//   q.push(friend);
//   return q;
// }

// console.log(addFriend(user, "Pete"));
// console.log(user.data.friends);

// !===============Возвращает факториал заданного целого числа(freeBootCamp)==========================

// function factorialize(num) {
// 	let fuck = 1;
//   for (let i = 1; i <= num; i++) {

// 	  fuck *= i;
//   }
//   return fuck;
// }

// // *с использованием рекурсии
// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }

// console.log(factorialize(6));
//!================================
// function multiply() {
//   let total = 1;
//   console.log(arguments);
//   for (const argument of arguments) {
//     console.log(argument);
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

//!====******=====задачки Владика====*******=====================
// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
// **Input**: String
// **Output**: Boolean
// function isUnique(string) {
//   const unique = [...new Set(string)];
//   return string.length === unique.length ? true : false;
// }

// function isUnique(string) {
//   for (let i = 0; i < string.length; i++) {
//     const element = string[i];
//     if (string.indexOf(element) !== i) {
//       return false;
//     }
//   }
//   return true;
// }

// function isUnique(string) {
//   return new Set(string).size === string.length;
// }

// console.log(isUnique("abcdef")); // -> true
// console.log(isUnique("1234567")); // -> true
// console.log(isUnique("abcABC")); // -> true
// console.log(isUnique("abcadef")); // -> false
//====================================================================
//! Плоский массив
// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.
// **Input**: Array
// **Output**: Array
// function flatten(array) {

// 		return array.flat(Infinity)//самое быстрое решение

//   const arr = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     if (Array.isArray(element)) {
//       const flat = flatten(element);
//       console.log(flat);
//       for (let j = 0; j < flat.length; j++) {
//         arr.push(flat[j]);
//       }
//     } else {
//       arr.push(element);
//     }
//   }
//   return arr;
// }

// console.log(flatten([[[[[[[[[[[1]]]]]]]]]], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
//========================================================================
// ! Удаление всех повторяющихся значений в строке
// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
// **Input**: String
// **Output**: String
// function removeDupes(str) {
//   const arr = str.split("");
//   const filt = str.split("").filter((item, idx) => arr.indexOf(item) === idx);
//   return filt.join("");
// }
// function removeDupes(str) {
//   return [...new Set(str)].join("");
// }

// console.log(removeDupes("abcd")); // -> 'abcd'
// console.log(removeDupes("aabbccdd")); // -> 'abcd'
// console.log(removeDupes("abcddbca")); // -> 'abcd'
// console.log(removeDupes("abababcdcdcd")); // -> 'abcd'
//=====================================================================
//! Какая строка встречается чаще всего
// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.
// **Input**: String[]
// **Output**: String
// function highestFrequency(array) {
//   const map = {};
//   let maxFreq = 0;
//   let maxFrStr = array[0];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (map[element]) {
//       map[element] += 1;
//     } else {
//       map[element] = 1;
//     }

//     if (map[element] > maxFreq) {
//       maxFreq = map[element];
//       maxFrStr = element;
//     }
//   }
//   return maxFrStr;
// }

// console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
// console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
// console.log(highestFrequency(["abc", "def"])); // -> abc
// console.log(
//   highestFrequency([
//     "abc",
//     "abc",
//     "def",
//     "def",
//     "def",
//     "ghi",
//     "ghi",
//     "ghi",
//     "ghi",
//   ])
// ); // -> ghi
//======================================================================
//!Повернута ли строка?
// Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.
// **Input**: String, String
// **Output**: Boolean
// function isStringRotated(source, test) {
//   if (source.length !== test.length) {
//     return false;
//   }
//   for (let i = 0; i < source.length; i++) {
//     const el = source[i];
//     if (test.includes(el)) {
//       return true;
//     }
//   }
// }

// console.log(isStringRotated("javascript", "scriptjava")); // -> true
// console.log(isStringRotated("javascript", "iptjavascr")); // -> true
// console.log(isStringRotated("javascript", "java")); // -> false
// console.log(isStringRotated("javascript", "vajariscpt")); // -> true
//======================================================================
//!Является ли массив подмножеством другого массива
// Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.
// **Input**: Number[] & String[], Number[] & String[]
// function arraySubset(source, subset) {
// 	if (source.length < subset.length) {
// 		return false
// 	}
// 	for (let i = 0; i < subset.length; i++) {
// 		const element = subset[i];
// 		const idx = source.indexOf(element)

// 		if (idx === -1) {
// 			return false
// 		}
// 		delete source[idx]
// 	}
// 	return true
// }

// console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
// console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
// console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
// console.log(arraySubset([1, 2], [1, 2, 3])) // -> false
//======================================================================
//!Анаграммы
// Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.
// **Input**: String[]
// **Output**: Boolean
// function allAnagrams(array) {
//   const sorted = array.map((str) => str.split("").sort().join(""));
//   for (let i = 1; i < sorted.length; i++) {
//     const el = sorted[i];
//     if (el !== sorted[0]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(allAnagrams(["abcd", "bdac", "cabd"])); // true
// console.log(allAnagrams(["abcd", "bdXc", "cabd"])); // false
//======================================================================
//!Простой поиск
// Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть `-1`.
// **Input**: Number[], Number
// **Output**: Number
// function search(array, target) {
//   return array.indexOf(target);
// }

// console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
// console.log(search([1, 3, 6, 13, 17], 12)); // -> -1
//====================================================================
//!Сбалансированные скобки
// Напишите функцию, которая проверит строку на сбалансированность скобок: `{}, (), []`. Вернуть `true` если они сбалансированы, иначе `false`.
// **Input**: String
// **Output**: Boolean
// function isBalanced(string) {
//   const start = '({['
//   const end = ']})'

//   const map = {
//     '}': '{',
//     ')': '(',
//     ']': '['
//   }

//   const queue = []

//   for (let i = 0; i < string.length; i++) {
//     const char = string[i]

//     if (start.includes(char)) {
//       queue.push(char)
//     } else if (end.includes(char)) {
//       const last = queue.pop()

//       if (map[char] !== last) {
//         return false
//       }
//     }
//   }

//   return !queue.length
// }
// function isBalanced(str) {
//   const obj = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   const stack = [];
//   for (let i = 0; i < str.length; i++) {
//     const el = str[i];
//     if (el === "(") {
//       stack.push(el);
//     } else if (el === ")") {
//       const last = stack.pop();

//       if (obj[el] !== last) {
//         return false;
//       }
//     }
//   }
//   return !stack.length;
// }
// console.log(isBalanced("(x + y) - (4)")); // -> true
// console.log(isBalanced("(((10 ) ()) ((?)(:)))")); // -> true
// console.log(isBalanced("[{()}]")); // -> true
// console.log(isBalanced("(50)(")); // -> false
// console.log(isBalanced("[{]}")); // -> false
//============================================================
//!Deep Equal
// Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра
// **Inputs**: Any, Any
// **Output**: Boolean
// function deepEqual(a, b) {
// 	const strA = JSON.stringify(a)
// 	const strB = JSON.stringify(b)
// console.log(strA, strB);
// 	return strA === strB;
// }

// const source = {a: 1, b: {c: 1}}
// const test1 = {a: 1, b: {c: 1}}
// const test2 = {a: 1, b: {c: 2}}
// console.log(deepEqual(source, test1)) // -> true
// console.log(deepEqual(source, test2)) // -> false
// console.log(deepEqual(NaN, NaN)) // -> true
// console.log(deepEqual('test', 'test!')) // -> false
// console.log(deepEqual()) // -> true
//===============================================================
//!Последовательность Фибоначчи
// Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны `n`, которую передали как аргумент.
// **Input**: Number
// **Output**: Number[]
// function fibonacci(n) {
// 	const res = [1, 1]
// 		if (!n) {
// 		 console.log('Enter some number');
// 	}
// 	if (n<2) {
// 		return res.slice(0, n)
// 	}
// 	while (res.length < n) {
// 		const last = res[res.length - 1];
// 		const prev = res[res.length - 2];
// 		res.push(prev + last)
// 	}
// 	return res
// }

// console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
// console.log(fibonacci(1)) // -> [1]
//=============================================================
//!Своя функция bind
// Реализуйте функцию `bind`.
// **Input**: Object, arguments
// **Output**: Function
// const student = {
//   name: "Nikita",
//   age: 18,
//   job: "student",
// };

//  function logPerson(...props) {
//   console.log(this.name, ...props);
// }

// Function.prototype.myBind = function (context, ...args) {
//   return (...rest) => {
//     this.call(context, rest.concat(...args));
//   };
// }

// const qqq = logPerson.myBind(student, 1213)
// qqq(24, 7, 45646)
//======================================================
//!Универсальная сумма
// Напишите функцию, которая складывает 2 числа. Работать функция должна как показано в примере ниже:
// **Input**: Number, Number
// **Output**: Number
// function add(a, b) {
//   if (!a) {
//     return add
//   }
//   if (!b) {
//     return function calc(c) {
//       if (!c) return calc
//       return a + c
//     }
//   }

//   return console.log(a + b);
// }
// add(20, 22) // -> 42
// add(2)(22) // -> 42
// add(20)()(22) // -> 42
// add(20)()()()(22) // -> 42
// add(20)()()()()()()()()()()()(22) // -> 42
// add()(20)(22) // -> 42
// add()()()()(20)(22) // -> 42
// add()(20)()(22) // -> 42
// add()()()()()(20)()()()(22) // -> 42
//===================================================
//!GroupBy
// Напишите функцию `groupBy`.
// **Input**: Number[] & String[], Function & String
// **Output**: Object
// function groupBy(arr, fn) {

// 	return arr.reduce((res, item) => {
// 		const key = typeof fn === 'function' ? fn(item) : item[fn];

// 		if (!res[key]) {
// 			res[key] = [];
// 		}
// 		res[key].push(item);

// 		return res;
// }, {})

// }

// console.log(groupBy([6.1, 4.2, 6.3], Math.floor));// -> { '4': [4.2], '6': [6.1, 6.3] }
// console.log(groupBy(['one', 'two', 'three'], 'length')); // -> { '3': ['one', 'two'], '5': ['three'] }

//!Завдання до виконання мовою JavaScript(Radency test task)
/*Під час співбесіди вас просять створити програму, яка перевіряє, чи можна сформувати заданий рядок S з двох інших рядків: P1 і P2, так, щоб не залишилось зайвих символів.
Умова в тому, що символи в P1 і P2 мають бути в тому самому порядку, що й у S.
Інтерв’юер наводить вам наступний приклад: 'radency' можна сформувати за допомогою 'rdnc’ та 'aey':
  S:  r a d e n c y   = radency
P1:  r    d    n c      = rdnc
P2:    a    e       y   = aey*/

const s = "radency";
const p1 = "rdnc";
const p2 = "aey";
const S = "w27y7";
const P1 = "27";
const P2 = "w7y";

//?    С помощью рекурсии

function isMerge(s, part1, part2) {
  console.log(s);
  console.log(part1, part2);
  return !s
    ? !(part1 || part2)
    : (s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2)) ||
        (s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1)));
}

//?   Более очевидный вариант

// const stringChecker = function (s, p1, p2) {
//   let p1Index = 0;
//   let p2Index = 0;

//   for (let i = 0; i < s.length; i++) {
//     console.log(s);
//     console.log(p1[p1Index], p2[p2Index]);

//     if (!p1[p1Index] || !p2[p2Index]) {
//       return true;
//     }

//     const currentChar = s[i];

//     // Перевіряємо, чи символ потрібно взяти з P1
//     if (p1[p1Index] && p1[p1Index] === currentChar) {
//       p1Index++;
//     }
//     // Перевіряємо, чи символ потрібно взяти з P2
//     else if (p2[p2Index] && p2[p2Index] === currentChar) {
//       p2Index++;
//     }
//     // Якщо жоден з попередніх умов не виконується, то рядок S не може бути сформований з P1 та P2
//     else {
//       return false;
//     }
//   }

//   // Перевірка, чи ми використали всі символи з P1 та P2
//   return p1Index === p1.length && p2Index === p2.length;
// };

console.log(stringChecker(S, P1, P2));
// console.log(stringChecker(s, p1, p2));
console.log(isMerge(S, P1, P2));
