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

// !==============УДАЛЕНИЕ ДУБЛИКАТОВ (УНИКАЛЬНЫЕ ЗНАЧЕНИЯ)===========================
// получить новый массив с уникальными значениями
// const array = [1, 2, 3, 3, 4, 5, 6, 6, 7];

// 1 способ (через фильтр)
	// const uniqArray = array.filter((num, i) => array.indexOf(num) === i);//индексОф возвращает индекс значения первый раз встреченного
	// console.log(uniqArray);

// 2 способ (через сет)
// console.log(new Set(array));//обьект уник.значений
// console.log([...new Set(array)]);//массив уник.значений распылением 
// console.log(Array.from(new Set(array)));//массив уник.значений методом Array 

// 3 способ (через редьюс)
// const uniqArr = array.reduce((uniq, item) => {
// return uniq.includes(item) ? uniq : [...uniq, item];//или запушить еще можно в новый массив
// }, [])
// console.log(uniqArr);

// 4 способ (через ключи обьекта)
//  const arrayLetters = [...array];
// let temp = {};
// arrayLetters.forEach((item, i) => temp[item] = i);

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
// 	const firstYear = p0 + p0 * (percent / 100) + aug;
// 	let total = firstYear;
// 	if(firstYear !== p){
// 		total += firstYear + firstYear * (percent / 100) + aug;
// 	}

// console.log(nbYear(1500, 5, 100, 5000));

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
// console.log(countSmileys([]));//0

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



console.log(high('man i need a taxi up to ubud'));//taxi
console.log(high('what time are we climbing up the volcano'));//volcano

