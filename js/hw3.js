//! # 10 ======= Цикл for...in =======================================================================

// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values
//  все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// let str = "";

// for (const key in apartment) {
//    str += key;
//    keys.push(key);
//    values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
// console.log(str);

//! # 11 ======== Метод hasOwnProperty() ================================================================

// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//    if (apartment.hasOwnProperty(key)) {
//    keys.push(key);
//   values.push(apartment[key]);
// }
// }
// console.log(keys);
// console.log(values);

//! # 12 ====== Подсчёт свойств ================================================================================

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// const object = {
//    name: "Sam",
//    age: 36,
//    work: 'surveor',
//    hobbies: [1, 2, 3],
//    cvkljsdv: 6,
// }

// function countProps(object) {
//   let propCount = 0;
//    for (const key in object) {

//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//    }

//   return propCount;
// }
// console.log(countProps(object));

//! # 13 ======= Метод Object.keys() ==================================================================================

// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys.length);
// for (const key of keys) {
//    values.push(apartment[key]);
// }

// console.log(values);


//! # 14 ====== Задача. Подсчёт свойств 2.0 ============================================================================

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// function countProps(object) {

//   return Object.keys(object).length;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


//! # 15 ======== Метод Object.values() ==================================================================================

// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);


//! # 16 ======== Задача. Расходы на зарплату ==============================================================================

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//    let totalSalary = 0;
//    let allSalaries = Object.values(salaries);

//    for (const salary in allSalaries) {
   
//    if (Object.hasOwnProperty.call(allSalaries, salary)) {
//       totalSalary += allSalaries[salary];
//    }
// }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


//! #17============ Массив объектов =================================================================================================

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//    hexColors.push(color.hex);
//    rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//! #18=========== Задача. Поиск объекта по значению свойства ======================================================================

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// ::::::: 1 вариант ::::::::::::::::::::::::::::::::::

// const getProductPrice = function (productName) {
   
//    for (const product of products) {
     
//       if (product.name === productName) {           
//          return product.price;
//       } 
//    }
//    return null;
// }
// console.log(getProductPrice("Radar"));

// ::::::: 2 вариант ::::::::::::::::::::::::::::::::::

// const getProductPrice = function (productName) {
   
//    for (const product of products) {
      
//       if (Object.values(product).includes(productName)) {
//          return product.price;
//        } 
//    }
//    return null;
// }
// console.log(getProductPrice("Radar"));

// !#19 =========== Задача. Коллекция значений свойства ===========================================================================

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//    const propValues = [];

//    for (const product of products) {
      
//       if (Object.keys(product).includes(propName)) {

//          propValues.push(product[propName]);
//       }
//    }

//    return propValues;
// }

// console.log(getAllPropValues("price"));

// !#20======= Задача. Общая стоимость товара ==================================================================================

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//    let totalPrice = 0;

//    for (const product of products) {
      
//       if (Object.values(product).includes(productName)) {
//          totalPrice = product.price * product.quantity;
//       }
// }
//    return totalPrice;
// }
// console.log(calculateTotalPrice("svca"));

// !#21================ Деструктуризация объектов ===========================================================================

// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

 