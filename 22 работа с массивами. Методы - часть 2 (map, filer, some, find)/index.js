'use script';

const myArray = [1, 2, 3, 4, 5, false, 'text', 54.32, '100.18851'];

console.log(`============== метод forEach()`);

myArray.forEach((el) => console.log(el));

console.log(`============== метод .map()`);

const newArrayMap = myArray.map((el) => {
  return Math.pow(el, 2);
});
console.log(newArrayMap);

const myArray1 = ['hi', 'hello'];
const newArrayMap1 = myArray1.map((el) => {
  return el.length;
});
console.log(newArrayMap1);

const myArray2 = ['hi', 'hello'];
const prefix = 'PREF_';
const newMyArray2 = myArray2.map((el) => {
  return prefix + el;
});
console.log(newMyArray2);

const myArray3 = [
  {
    name: 'alex',
    hasAccount: true,
  },
  {
    name: 'john',
    hasAccount: false,
  },
];
const newMyArray3 = myArray3.map((el) => {
  console.log(el);
  return el.name;
});
console.log(newMyArray3);

console.log(`============== метод .filter()`);

const newMyArrayFilter1 = myArray3.filter((el) => {
  if (el.hasAccount == true) {
    return true;
  }

  return false;
});
console.log(newMyArrayFilter1);

console.log(`============== метод .find(); .some()`);

const myArray4 = [1, 2, '15.21', { hello: 'world' }];

// find(true/false) => { hello: 'world' }
// some(true/false) => true / false

console.log(`============== метод .find()`);
const elem1 = myArray4.find((el) => {
  if (el instanceof Object) {
    return true;
  }
});
console.log(elem1); // Вернёт сам элемент, который прошёл условие проверки овеи проверки: {hello: 'world'}

const elem2 = myArray4.find((el) => {
  if (el == 5) {
    return true;
  }
});
console.log(elem2); // Вернёт значение undefined,  так как ни один из итерируемых элементов не соответствует проверяемому условию: undefined

console.log(`============== метод .some()`);

const elem3 = myArray4.some((el) => {
  if (el instanceof Object) {
    return true;
  }
});
console.log(elem3); // Вернёт значение true, так как один из итерируемых элементов прошёл проверку: true

const elem4 = myArray4.some((el) => {
  if (el == 5) {
    return true;
  }
});
console.log(elem4); // Вернёт значение false, так как ни один из итерируемых элементов не соответствует проверяемому условию: false

console.log(`==============`);
console.log(`============== ДЗ`);

const data = [
  {
    id: 1,
    title: 'Новость дня',
    author: 'Alex',
    likes: 50,
  },
  {
    id: 2,
    title: 'Важная новость',
    author: 'John',
    likes: 150,
  },
  {
    id: 3,
    title: 'Важная новость #2',
    author: 'Elena',
    likes: 140,
  },
];

// console.log(data);

const topNews = data.filter((el) => {
  if (el.likes > 100) {
    return el;
  }
});

const array = topNews.map((el) => {
  return {
    id: el.id,
    title: el.title,
  };
});
console.log(array);

function getTopAuthor(data) {
  const topAuthor = data.map((el) => {
    return {
      author: el.author,
    };
  });

  return topAuthor;
}

const resultTopAuthor = getTopAuthor(topNews);
console.log(resultTopAuthor);

console.log(`==============`);
console.log(`==============`);
console.log(`============== Ещё ДЗ`);

console.log(`============== №2`);
const array2 = [1, 2, 3, 4, 5];

let array2SumResult = new Number();
array2.forEach((el) => {
  array2SumResult += el;
});
console.log(array2SumResult);

console.log(`============== №3`);
const array3 = ['my', 'name', 'is', 'Alex'];

const array2StrResult = array3.join(' ');
console.log(array2StrResult);

console.log(`============== №4`);
const badAge = 20;
const array4 = [15, 10, 20, 30];
const array4BoolResult = array4.includes(Number(badAge));
console.log(array4BoolResult);

console.log(`============== №5`);
const listUser = [
  {
    name: 'Alex',
    age: 20,
  },
  {
    name: 'Anna',
    age: 30,
  },
  {
    name: 'John',
    age: 10,
  },
];

function getAdultUser(listUser) {
  const arrayAdultUser = listUser.filter((el) => {
    return el.age > 18 ? el : null;
  });

  function getNameAdultUser(arrayAdultUser) {
    const arrayNameAdult = arrayAdultUser.map((el) => {
      return el.name;
    });

    return arrayNameAdult;
  }

  return getNameAdultUser(arrayAdultUser);
}

const result = getAdultUser(listUser);
console.log(result);
