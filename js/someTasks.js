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
console.log(new Set(array));//обьект
console.log([...new Set(array)]);//массив распылением
console.log(Array.from(new Set(array)));//массив методом Array

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

	const str = 'dbcib iuvdi efubhvi';
	const capitalizeFirstLetter = (str) =>{
		return str[0].toUpperCase() + str.substring(1);//1 СПОСОБ

		return str[0].toUpperCase() + str.slice(1, str.length);//2 СПОСОБ
	}
	console.log(capitalizeFirstLetter('dbcib iuvdi efubhvi'));

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
