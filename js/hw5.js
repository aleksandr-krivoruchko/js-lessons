// !#1================Контекст вызова функции=================================
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// const pizzaPalace = {
//    pizzas: ["Supercheese", "Smoked", "Four meats"],
   
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//    },
  
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));

// !#2===============Задача: аккаунт пользователя=================================
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.
// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
  
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// !#3===============Задача: история заказов==============================================
// Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//    ],
   
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
// };

// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

// !#4================Прототип объекта=============================================
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);

// child.name = "Jason";
// child.age = 27;

// !#5==============Задача: цепочка прототипов======================================
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child);

// !#6================Объявление класса==========================================
// Используя ключевое слово class объяви класс Car с пустым телом.

// class Car {}

// console.log(new Car());

// !#7================Конструктор класса=========================================
// Добавь классу Car метод constructor который принимает три параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// class Car {
// 	constructor(brand, model, price){
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// }

// const audi = new Car("audi", "a125", 100000);

// console.log(audi);

// !#8================Объект параметров========================================
// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

// class Car {

//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// !#9===============Методы класса=================================================
// Добавь классу Car два метода.
// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

// getPrice(){
// 	return this.price;
// }

// changePrice(newPrice){
// 	return this.price = newPrice;
// }
// }

// !#10==================Задача: склад===========================================
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
// Объяви следующие методы класса:
// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// class Storage {
	
// constructor(array){
// 	this.items = array;
// }

// getItems(){
// 	return this.items;
// }

// addItem(newItem){
// return this.items.push(newItem);
// }

// removeItem(itemToRemove){
// 	return this.items.splice(this.items.indexOf(itemToRemove), 1);
// }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// !#11==================Задача: конструктор строк=========================================
// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.
// Объяви следующие методы класса:
// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// class StringBuilder{
// constructor(initialValue){
// 	this.value = initialValue;
// }

//   getValue(){
// 	return this.value;
// }

// padEnd(str){
// 	this.value = this.value.padEnd(this.value.length + str.length, str);
// }

// padStart(str){
// 	this.value = this.value.padStart(this.value.length + str.length, str);

// }

// padBoth(str){
// 	this.value = str + this.value + str;
// }

// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// !#12===============Приватные свойства===================================================
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.
// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

class Car {

  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

}
