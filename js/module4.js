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

function getBotReport({ companyName, repairBots, defenceBots} ) {

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
   list : "default",
      ...partialContact,
   }
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
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