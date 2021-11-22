// !=================-НАХОЖДЕНИЕ САМОГО МАЛЕНЬКОГО ЧИСЛА-============================
const marks = [50, 20, 10, 5, 7, 3, 100];

// 1 способ
console.log(Math.min(...marks));

// 2 способ
const findMin = function (marks) {
	let min = marks[0];
	for (const mark of marks) {
		if (mark < min) {
			min = mark;
		}
	}
	return min;
}
console.log(findMin(marks));

console.log("welcome to js world"[0]);

// !==============УДАЛЕНИЕ ДУБЛИКАТОВ (УНИКАЛЬНЫЕ ЗНАЧЕНИЯ)===========================
// получить новый массив с уникальными значениями
const array = [1, 2, 3, 3, 4, 5, 6, 6, 7];

// 1 способ (через фильтр)
	const uniqArray = array.filter((num, i) => array.indexOf(num) === i);//индексОф возвращает индекс значения первый раз встреченного
	console.log(uniqArray);

// 2 способ (через сет)
console.log(new Set(array));//обьект уник.значений
console.log([...new Set(array)]);//массив уник.значений распылением 
console.log(Array.from(new Set(array)));//массив уник.значений методом Array 

// 3 способ (через редьюс)
const uniqArr = array.reduce((uniq, item) => {
return uniq.includes(item) ? uniq : [...uniq, item];//или запушить еще можно в новый массив
}, [])
console.log(uniqArr);

// 4 способ (через ключи обьекта)
 const arrayLetters = [...array];
let temp = {};
arrayLetters.forEach((item, i) => temp[item] = i);

console.log(Object.keys(temp));


	// !=========УДАЛЕНИЕ ВСЕХ ЭЛЕМЕНТОВ МАССИВА===================

	let cities = ['pavlograd', 'ternovka', 'pershik'];
	cities.length = 0;
	console.log(cities);

	// !==========ЗАГЛАВНАЯ БУКВА СТРОКИ===========================

	const str = 'я изучаю язык';
	const capitalizeFirstLetter = (str) =>{
		return str[0].toUpperCase() + str.substring(1);//1 СПОСОБ

		return str[0].toUpperCase() + str.slice(1, str.length);//2 СПОСОБ

	  return str.replace(str[0], str[0].toUpperCase());//3 СПОСОБ
	}
	console.log(capitalizeFirstLetter(str));

	// !=========ПОЛУЧИТЬ ЦЕЛОЕ ЧИСЛО============================
	let num = 123.456;

	// 1 СПОСОб
	console.log(Math.trunc(num));

		// 2 СПОСОб
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

		// 3 СПОСОб
console.log(parseInt(num, 10));

		// 4 СПОСОб
console.log(num.toFixed(0));

// !============ПРОВЕРКА НА ЦЕЛОЕ ЧИСЛО========================
// 1 СПОСОБ
console.log(Number.isInteger(num));

// 2 СПОСОб
if (Math.floor(num) === num) {
	console.log(`Это целое число: ${num}`);
} else {	console.log(`Это HEцелое число: ${num}`);
}
// 3 СПОСОб(остаток от деления на единицу)
if (num % 1 === 0) {
	console.log(`Это целое число: ${num}`);
} else {	console.log(`Это HEцелое число: ${num}`);
}
// 4 СПОСОб (остаток от деления на единицу 0 приводится к фолс, а ! делает тру)
if (!num % 1) {
	console.log(`Это целое число: ${num}`);
} else {	console.log(`Это HEцелое число: ${num}`);
}

// !=============ПРОВЕРКА НА СОДЕРЖАНИЕ ПОДСТРОКИ В СТРОКЕ=============
const string = 'I love this game';
const substring = 'this';

// 1 СПОСОБ
console.log(string.includes(substring));
// 2 СПОСОБ
console.log(string.indexOf(substring) !== -1);

// !===============ПОМЕНЯТЬ МЕСТАМИ ПЕРЕМЕННЫЕ========================
let a = 10;
let b = 'age';
console.log(a,b);

//1 способ
[a, b] = [b, a];
console.log(a,b);

//2 способ
let c = a;
a = b;
b = c;
console.log(a,b);

// !============ПРОВЕРКА НА ПУСТОЙ МАССИВ или ОБЬЕКТ=======================
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

const keys = Object.keys(book);

if (keys.length === 0) {
	console.log(`пусто`);
} else {console.log(`HE пусто`);}

const arr = [];
if (arr.length === 0) {
	console.log(`пусто`);
} else {console.log(`HE пусто`);}


// !============СЛУЧАЙНОЕ ЧИСЛО=======================

console.log(Math.random() * (10 - 1) + 1);


// !============codewars task 1=======================
function likes(names) {
  if (names.length === 0) {
	  return `no one likes this`;
  } else if (names.length === 1){
	  	  return `${names[0]} likes this`;
  }
	 else if(names.length === 2){
	  	  return `${names[0]} and ${names[1]} like this`;
 } else if(names.length === 3){
	  	  return `${names[0]}, ${names[1]} and ${names[2]} like this`;

}  else {
	return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
}

let names = ["Jacob", "Alex"];
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(names));

// !============codewars task 2=======================
function filter_list(arrayM) {
return arrayM.filter(item => Number(item) === item);
}
console.log(filter_list([1,2,'aasf','1','123',123]));

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
console.log(Number.isNaN(2));


// !============codewars task 3=======================
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

// // 	const firstYear = p0 + p0 * (percent / 100) + aug;
// // const secYear = firstYear + firstYear * (percent / 100) + aug;
// 	return total;
// }

function nbYear(p0, percent, aug, p) {

	
	let x = p0 + p0 * (percent / 100) + aug;
	let x2 = x + x * (percent / 100) + aug;
return x2;	

// let total = 0;
	// let count = 0;
	// for (let i = 0; i < 100; i++) {
	// 	if (total <= p) {
	// 		total += x;
	// 	count += i;
	// 	} else {break;}
		
	// }

	// return count;
}

console.log(nbYear(1500, 5, 100, 5000));