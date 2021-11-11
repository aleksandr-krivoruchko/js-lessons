// !=====Модуль 4. Занятие 8. Перебирающие методы массива==========================

// Коллекция объектов для всех примеров с автомобилями

const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];

// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

const getModels = cars => cars.map(car => car.model);

console.table(getModels(cars));


//todo Example 2 - Метод map добавить распыление!!!!
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с измененным значением свойства price в зависимости от переданной скидки.

const makeCarsWithDiscount = (cars, discount) => cars.map(car => {
	return {
		...car,
		price: car.price * (1 - discount),
	}
});

console.table(makeCarsWithDiscount(cars, 0.2));


// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

const filterByPrice = (cars, threshold) => cars.filter(({price}) => price < threshold);

console.table(filterByPrice(cars, 30000));


// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale);

console.table(getCarsWithDiscount(cars));


// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

console.table(getCarsWithType(cars, 'suv'));


// Example 6 - Метод find

const getCarByModel = (cars, model) => cars.find(car => car.model === model);

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));


// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

const sortByAscendingAmount = cars => [...cars].sort((fAm, sAm) => fAm.amount - sAm.amount );

console.table(sortByAscendingAmount(cars));


// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

const sortByDescendingPrice = cars => [...cars].sort((fPr, sPr) => sPr.price - fPr.price);

console.table(sortByDescendingPrice(cars));


// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

const sortByModel = (cars, order) => {

  // if (order === 'asc') {

  //   return [...cars].sort((fCar, sCar) => fCar.model.localeCompare(sCar.model));
  // }
  // return [...cars].sort((fCar, sCar) => sCar.model.localeCompare(fCar.model));
  return order === 'asc'
    ? [...cars].sort((fCar, sCar) => fCar.model.localeCompare(sCar.model))
    : [...cars].sort((fCar, sCar) => sCar.model.localeCompare(fCar.model))
};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));


// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

const getTotalAmount = cars => cars.reduce((total, car) => total + car.amount, 0);

console.log(`Oбщее количество автомобилей: ${getTotalAmount(cars)} штук`);


// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

const getModelsOnSale = cars => cars.filter(({onSale}) => onSale).map(car => car.model);

console.table(getModelsOnSale(cars));


// Example 12 - Цепочки методов (!!!!можно без мэп!!!!!!)
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

const getSortedCarsOnSale = cars => cars
.filter(({onSale}) => onSale)
.sort((a, b) => a.price - b.price)
.map(car => car.model);

console.table(getSortedCarsOnSale(cars));

// ================ЗАДАЧА из фрикодкемпа==================================
// Для данного idпараметра, который связан с records  объектом:
// * Если valueпараметр не является пустой строкой, обновите (или установите) valueпараметр для propпараметра.
// * Если prop параметр равен "tracks"и value не является пустой строкой, поместите valueв конец tracks массива.
// * Если value это пустая строка, удалите ее prop из объекта.

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;

  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];

  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);

  } else if (value === "") {
    delete records[id][prop];
  }
  
  return records;
}
console.table(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.table(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));


