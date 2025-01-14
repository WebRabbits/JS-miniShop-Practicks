'use strict';

const key = 'name';

const value = 'Привет';

const obj = {
  key: 'value',
  value: value,
};

console.log(obj);
console.log(typeof obj);

console.log(`============== Оператор проверки наличия свойства в объекте = in`);

const user = {
  name: 'alex',
  age: 18,
  state: undefined,
  family: {
    dad: {
      name: 'St.Alex',
    },
    mom: {
      name: 'Eliza',
    },
  },
};

console.log('name' in user);
console.log('age' in user);
console.log('email' in user);

console.log(
  `============== Оператор проверки наличия свойства в объекте = hasOwnProperty`
);
console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('id'));

if ('name' in user) {
  console.log(user.age);
}

if (typeof user.age === 'number' || user.age === undefined) {
  console.log(user.age);
}

if (typeof user.state === 'string' || typeof user.state === 'number') {
  console.log('Привет');
} else {
  user.state = null;
}

if ('state' in user) {
  console.log('Привет');
} else {
  user.state = null;
}

console.log(user);

console.log(`============== Приведение объекта к строке`);

console.log(user.toString());

const str1 = JSON.stringify(user);
console.log(str1);
console.log(typeof str1);

console.log(JSON.parse(str1));

if (user.state == undefined) {
  user.state = null;

  const newObjUser = JSON.stringify(user);
  console.log(newObjUser);
  console.log(JSON.parse(newObjUser));
}

console.log(`============== Итерация по объекту при помощи цикла for...in`);

for (let i in user) {
  const value = user[i];
  console.log(i, value);
}

for (let i in user.family) {
  const valueFamily = user.family[i];
  console.log(i);
  console.log(valueFamily);
}

console.log(`============== Методы для конвертации ОБЪЕКТА в МАССИВ`);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.keys(user.family));

console.log(`==============`);

const entries = Object.entries(user);

for (let i = 0; i < entries.length; i++) {
  const valueArray = entries[i];
  const key = valueArray[0];
  const value = valueArray[1];

  console.log(key, value);
}

console.log(Object.keys(user));

console.log(`============== Сравнение объектов`);

const obj1 = { test: 'hello' };
const obj2 = { test: 'hello' };

console.log(obj1 === obj2);

console.log(`==============`);
console.log(`============== ДЗ`);
/**
 * Требуется вывести информацию по члену семьи и его родственников
 * Условие - если членов семьи становится меньше/больше - то должна динамически выводится информация по членам семьи
 * Лучше всего привести к единому виду исходный объект (обработать свойство "age") - чтобы новая структура данных была однотипной по каждому члену семьи.
 */

const userInformation = {
  name: 'Иван',
  surname: 'Иванов',
  age: 15,
  family: {
    dad: {
      name: 'Александр',
      surname: 'Иванов',
      age: undefined,
    },
    mom: {
      name: 'Наталья',
      surname: 'Иванова',
    },
    brother: {
      name: 'Константин',
      surname: 'Иванов',
      age: '10',
    },
    sister: {
      name: 'Агафия',
      surname: 'Иванова',
      age: 25.5,
    },
  },
};

// console.log(Object.keys(userInformation.family));

const listOfMember = {
  dad: 'Отец',
  mom: 'Мать',
  brother: 'Брат',
  sister: 'Сестра',
};

function getInfo(info) {
  const countFamily = Object.keys(info.family).length;

  let resultMessage = `У ${info.name} ${info.surname} всего ${countFamily} член(-а/-ов) семьи. \n`;

  let editedObjectFamily = new Array();
  for (let key in info.family) {
    const value = info.family[key];

    if (value.hasOwnProperty('age') || value.age == undefined) {
      value.age = Number(value.age);
    }

    if (Number.isNaN(value.age)) {
      value.age = 'возраст не известен';
    }

    editedObjectFamily.push({
      [key]: value,
    });
  }

  for (let i = 0; i < editedObjectFamily.length; i++) {
    const elementsObj = editedObjectFamily[i];

    for (let key in elementsObj) {
      const valueData = elementsObj[key];

      const member = listOfMember[key];

      if ([key] in elementsObj && member) {
        resultMessage += `${listOfMember[key]} - ${valueData.name} ${valueData.surname} (${valueData.age}). \n`;
      }
    }
  }

  return resultMessage;
}

const resultFamilyInfo = getInfo(userInformation);
console.log(resultFamilyInfo);
