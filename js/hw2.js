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


// Задачка Репеты==========================================
// let balance = 5000;
// const payment = 6000;
// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету!`);
// let message = balance >= payment ? `На счету осталось ${balance - payment} кредитов.` : 'На счету недостаточно кредитов:-(';
// console.log(message + '  Операция завершена');

// Пример continue============================================
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 5;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }
  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

