"use strict"
// console.log("I learning JS");
// let num = 7;

// num = 25;

// console.log(num);

// let colorEyes = '#blue';
// let user;
// let userName = 'Вася';
// user = userName;
// console.log(user);
// console.log(userName);
// console.log(colorEyes);
// console.log(num);

// let myName = 'Alex';
// let myAge = '36';
// let myWork = 'Marksheider';
// console.log(myWork);
// myAge = 55;
// console.log(myAge);

// const myDog = "Daineris";
// console.log(myDog);



// var wakeUpTime = '5.00 in the morning';
// console.log(typeof wakeUpTime);

// let trueOrFalse = 55 > 33;
// console.log(trueOrFalse);


// let userInfo = {
//    name: 'Alex',
//    age: 36
// }
// console.log(userInfo);

// let userTrue = true;
// console.log(userTrue);
// console.log(typeof userTrue);

// userTrue = String(userTrue);
// console.log(userTrue);
// console.log(typeof userTrue);

// // let z = 6**2;
// // console.log(`[Абсолютная высота будет:${z}]`);

// const userMame = 'Samuel';
// console.log('My name is:', userMame);


// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// // Спрашиваем имя отеля в котором хотел бы остановится клиент
// // и сохраняем в переменную результат вызова prompt.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"
 const x = 5; const y = 10; const z = 5;

console.log("x > y:", x > y); // false
console.log("x < y:", x < y); // true
console.log("x < z:", x < z); // false
console.log("x <= z:", x <= z); // true
console.log("x === y:", x === y); // false
console.log("x === z:", x === z); // true
console.log("x !== y:", x !== y); // true
console.log("x !== z:", x !== z); // false

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"


const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

// Math.floor(num) - возвращает наибольшее целое число,
// меньшее, либо равное указанному
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа,
// округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10



// #12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
   let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
   let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
   return message;
}
console.log(makeOrderMessage(5, 100, 70));
 
// #13
function isAdult(age) {
  const passed = age >= 18;
  return passed;
}
console.log(isAdult(19));


// #14
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = SAVED_PASSWORD === password;
  return isMatch;
}
console.log(isValidPassword('password'));


// #18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
let totalPrice = pricePerDroid * orderedQuantity;
  let creditsLeft = customerCredits - totalPrice;
  if (totalPrice > customerCredits){message = "Insufficient funds!";}
  else{message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;}
  return message;
}
console.log(makeTransaction(2000, 5, 20000));



// #20
function checkStorage(available, ordered) {
  let message;
  
   if (ordered === 0) {
      message = "There are no products in the order!";
   } else if (ordered > available) {
      message = "Your order is too large, there are not enough items in stock!";
   }
   else {
      message = "The order is accepted, our manager will contact you";
   }
  
  return message;
}
console.log(checkStorage(7, 5));


// #24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
if (totalSpent >= 50000){
   discount = totalSpent * GOLD_DISCOUNT
} else if (totalSpent >= 20000 && totalSpent <= 50000) {
   discount = totalSpent * SILVER_DISCOUNT
} else if (totalSpent >= 5000 && totalSpent <= 20000) {
   discount = totalSpent * BRONZE_DISCOUNT
} else { discount = totalSpent * BASE_DISCOUNT}
  return `Ваша скидка составляет ${discount}грн.`;
}
console.log(getDiscount(6000));


// №25
function checkStorage(available, ordered) {
  let message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
 message 
  return message;
}
console.log(checkStorage(75, 50));


// #27
function getSubscriptionPrice(type) {
  let price;
 switch (type) { 
    case "starter": 
      price = 0; 
      break;

    case "professional": 
      price = 20; 
      break;

    case "organization": 
      price = 50; 
      break;
  }
  return price;
}
console.log(getSubscriptionPrice("organization"));

// #28
function checkPassword(password) {
  const ADMIN_PASSWORD = "Repeta";
  let message;
switch (password){
  case null:
    message = "Canceled by user!";
    break;
  case "Repeta":
    message = "Welcome!";
    break;
  default: message = "Access denied, wrong password!";
}
  return message;
}
console.log(checkPassword("Danilko"));



// #29
function getShippingCost(country) {
  let message;
  
  switch (country){
    case 'China':
    message = "Shipping to China will cost 100 credits";
    break;
      
    case 'Chile':
    message = "Shipping to Chile will cost 250 credits";
    break;
      
    case 'Australia' :
    message = "Shipping to Australia will cost 170 credits";
    break;
      
    case 'Jamaica' :
    message = "Shipping to Jamaica will cost 120 credits";
    break;
      
    default: message = "Sorry, there is no delivery to your country";
  }
  return message;
}
console.log(getShippingCost('Ukraine'));

// #30
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; 
  return message;
}
console.log(getNameLength('Aleksandr Kryvoruchko'));

// #31
const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength - 1];
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);




// #32
function getSubstring(string, length) {
  const substring = string.slice(0, length); 
  return substring;
}
console.log(getSubstring("mlkkwvlm lkmvldkvvlk fhefb", 7));

// #33
function formatMessage(message, maxLength) {
  let result;
 
  result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
 
  return result;
}
console.log(formatMessage("Vestibulum facilisis purus nec", 20));

// №34
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); 
  return normalizedInput;
}
console.log(normalizeInput("This ISN'T SpaM"));


// #35
function checkForName(fullName, name) {
 const result = fullName.includes(name); 
  return result;
}
console.log(checkForName('Samuel Krivouzis', 'Samyel'));

// #36
function checkForSpam(message) {
  let result;
  result = message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam'); 
  return result;
}
console.log(checkForSpam("[SPAM] How to earn fast money?"));







