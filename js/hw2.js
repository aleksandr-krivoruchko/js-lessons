// Задачка Репеты==========================================
// let balance = 5000;
// const payment = 6000;
// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету!`);
// let message = balance >= payment ? `На счету осталось ${balance - payment} кредитов.` : 'На счету недостаточно кредитов:-(';
// console.log(message + '  Операция завершена');

// Пример continue============================================
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 5;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// ################## HOME WORKS ************************************************************************

// #1===================================================
// function checkAge(age) {
//   if (age >= 18) { 
//     return "You are an adult";
//   }
//   return "You are a minor";
// }
// console.log(checkAge(36));


// #2===========================================================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "Repeta";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }  
//     return "Access denied, wrong password!";
//   }
//   console.log(checkPassword('Danilko'));

//   #3=====================================================================
// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }  if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//   return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(200, 250));
  
// #4======================================================
// const fruits = ["apple", "plum", "pear", "orange"];

// #5=========================================================
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// #6======================================================
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// #7=======================================================
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// #8=========================================================
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// #9========================================================
// function getExtremeElements(array) {
//  const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   const firstElement = array[0];
//   return [firstElement, lastElement];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));


// #10======================================================
// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }
// let result = splitMessage("Mango hurries to the train", " ");
// console.log(result);
// result = splitMessage("best_for_week", "_");
// console.log(result);

// #11=========================================================
// function calculateEngravingPrice(message, pricePerWord) {
// const messageArray = message.split(" ");
// const totalPrice = messageArray.length * pricePerWord;
// return totalPrice;
// }
// let result = calculateEngravingPrice("Mango hurries to the train", 10);
// console.log(result);

// #12==========================================================
// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   return string;
// }
// let result = makeStringFromArray(["Mango", "hurries", "to", "the", "train"], "-//-");
//  console.log(result);

// #13============================================================
// function slugify(title) {
// const title1 = title.toLowerCase();
// const title2 = title1.split(" ");
// const title3 = title2.join("-") 
// return title3;
// }
// let result = slugify("Arrays for begginers");
//   console.log(result);

// #14========================================================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// #15=========================================================
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); 
// console.log(allClients);

// #16========================================================
// function makeArray(firstArray, secondArray, maxLength) {
// const newArray = firstArray.concat(secondArray).slice(0, maxLength);
// return newArray;
// }
// let result = makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea", "dgfg", "svdsdv"], 5);
//    console.log(result);

// #17============== Ц И К Л ==============================================
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// #18====================================================
// function calculateTotal(number) {
// 	let result = 0;
// for (let i = 0; i <= number; i += 1) {
// 	 result += i;
// }
// return result;
// }
// let result = calculateTotal(10);
//     console.log(result);

// #19=======================================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) { 
//   const fruit = fruits[i]; 
//   console.log(fruit);
// }

// #20======================================================
// function calculateTotalPrice(order) {
//   let total = 0;
// for (let i = 0; i < order.length; i += 1) { 
//    const price = order[i]; 
//    total += price;
//  }
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// #21==========================================================
// function findLongestWord(string) {
// const words = string.split(" ");
// let longestWord = words[0];
// for (const word of words) {
// 	if (word.length > longestWord.length){
//       longestWord = word;
// 	}
// }
// return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// #22===== P U S H =========================================================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
// for (let i = min; i <= max; i+= 1) {
//    numbers.push(i);
// }
//   return numbers;
// }
//  console.log(createArrayOfNumbers(29, 34));

// #23==============================================================
//  function filterArray(numbers, value) {
// const newArray = [];
// for (const number of numbers) {
// 	if(number > value){
// newArray.push(number);
// 	}
// }
// return newArray;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// #24==== I N C L U D E S =========================================================
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);; 
// }
// console.log(checkFruit("apple"));

// #25=================================================================
// function getCommonElements(array1, array2) {
// let commonArray = [];
// for (const element of array1) {
// 	if(array2.includes(element)){
// 		commonArray.push(element);
// 	}
// }
//  return commonArray;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// #26=================================================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const price of order) {
// 	  total += price;
//   }

//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// #27===============================================================
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
// 	  if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// #28===== %==%===%====================================================
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// #29==========================================================
// function getEvenNumbers(start, end) {
// 	let evenNumbers = [];
// for (let i = start; i <= end; i+= 1) {
// 	if(i % 2 === 0){
// 		evenNumbers.push(i); 
// 	}
// }
// return evenNumbers;

//   }
//   console.log(getEvenNumbers(3, 11));

// #30===== B R E A K ====================================================
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
// 	 break;
//   }
// }
// console.log(number);

// #31======= R E T U R N ==================================================
// function findNumber(start, end, divisor) {
  
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(8, 17, 3));

// #32===========================================================
// function includes(array, value) {
// 	let res = false;
// for (const element of array) {
// 	if (element === value ) {
// 		res = true;
// 	}
// 	}
// 	return res;
// }
// console.log(includes([1, 2, 3, 4, 5], 7));

