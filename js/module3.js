//! Модуль 3. Занятие 5. Объекты

// Example 1 - Основы обьектов====================================================================================

// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = 'skydiving';
// user.premium = false;
// for (const key of Object.keys(user)) {
//    console.log(`${key}: ${user[key]}`);
// }



// Example 2 - метод Object.values()==================================================================================

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// let sum = 0;
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// for (const salary of Object.values(salaries)) {
//   sum += salary;
// }
// console.log(sum);


// Example 3 - Массив объектов============================================================================================

// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];



// function calcTotalPrice(stones, stoneName) {
//   let totalPrice = 0;

//   for (const stone of stones) {

//     if (stone.name === stoneName) {
//       totalPrice = stone.price * stone.quantity;
//       return totalPrice;
//     }
//   }
// }
 
// console.log(`Общая стоимость камней составит: ${calcTotalPrice(stones, 'Изумруд')}$`);


// Example 4 - Комплексные задачи=========================================================================================

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
//   Типов транзацкий всего два.
//   Можно положить либо снять деньги со счета.
 
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//   Каждая транзакция это объект со свойствами: id, type и amount

const account = {

  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  
   //  Метод создает и возвращает объект транзакции.
   //  Принимает сумму и тип транзакции.
   
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.transactions.length,
  }
},

  
   //  Метод отвечающий за добавление суммы к балансу.
   //  Принимает сумму танзакции.
   //  Вызывает createTransaction для создания объекта транзакции
   //  после чего добавляет его в историю транзакций
   
  deposit(amount) {

    this.balance += amount;

    this.transactions.unshift(this.createTransaction(amount, Transaction.DEPOSIT));
  },


  /** Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.*/
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('снятие такой суммы не возможно, недостаточно средств');
      return;
    }

    this.balance -= amount;

    this.transactions.unshift(this.createTransaction(amount, Transaction.WITHDRAW));
  },


  /** Метод возвращает текущий баланс*/
  getBalance() {
    return this.balance;
  },


  /** Метод ищет и возвращает объект транзации по id*/
  getTransactionDetails(id) {
    
for (const transaction of this.transactions) {
  
  if (transaction.id === id) {

    return transaction;
  }
    }
    return "Такой транзакции не найдено :(";
  },


  /** Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций*/
  getTransactionTotal(type) {
    let count = 0;
    
    for (const transaction of this.transactions) {
       
    if (transaction.type === type) {
     count += transaction.amount;
  }
    }
    return count;
    },
};


console.log('initial:', account.getBalance()); // 0

account.deposit(100);
account.withdraw(50);
account.deposit(555);
account.withdraw(50);
account.withdraw(150);


console.table(account.transactions);
console.log(account.getTransactionDetails(3));

console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));


// !==========Модуль 3 Занятие 6. Деструктуризация и rest/spread============

// #1========Деструктуризация===============================================

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.
// function calcBMI(weight, height) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

console.log(calcBMI({ weight: '88,3', height: '1.75', }));
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  }),
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  }),
);


// #2=========Деструктуризация=======================================================================

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.
// function printContactsInfo(names, phones) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

function printContactsInfo({names, phones}) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
     console.log(`${nameList[i]}: ${phoneList[i]}`);
   }
}

printContactsInfo({
   names: 'Jacob,William,Solomon,Artemis',
   phones: '89001234567,89001112233,890055566377,890055566300',
});

// #3=============Глубокая деструктуризация=========================================================
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } }) {
  
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    bots: {
      repair: 150,
      defence: 50,
    },
  }),
);


// #4==============Деструктуризация================================================================
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName и stock и выводила репорт о количестве товаров на складе любой компании.

function getStockReport({ companyName, stock }) {
   let sum = 0;

   for (const item of Object.values(stock)) {
      sum += item;
   }
   return `${companyName} has ${sum} item in stock`;
}

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  }),
); // "Belacci has 35 item in stock"

// #5===============Операция spread====================================================================
// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого свойства.

function createContact(partialContact) {
   return {
      id:0,
      createdAt :{ },
   list : partialContact.list || "default",
      ...partialContact,
   }
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    
  }),
);

// #6======================Операция rest=============================================================
// Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.

function transformUsername({ firstName, lastName, ...args }) {
   return {
      
      fullName: `${firstName} ${lastName}`,
      ...args,
   }
}
console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  }),
);

const array = [1, 2, 3, 4, 5];
const arr = [...array];
console.log(array === arr);
console.log(array[3] === arr[3]);

// const a = {
//   x: 10,
//   y: 25,
//   z: 44,
// }

// const b = {
//   x: 22,
//   y: 35,
//   z: 24,
// }

// const c = {
//   x: 12,
//   y: 5,
//   r: 66,
//   u: 33,
// }

// const d = {
//   ...b,
//   ...a,
//   ...c,
//   x:444,
// }

// console.log(d);

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Декларативный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]