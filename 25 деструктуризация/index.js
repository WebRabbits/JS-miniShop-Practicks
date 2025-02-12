'use strict';

console.log(`============== Деструктуризация`);
const test = [1, 2, 3, 4];
const obj = { a: 1, b: 2, c: 3 };

const one = test[0];
console.log(one);

const [first, two, three, four, five] = [1, 2, 3, 4];
console.log(two, four, five);

const {
  user_age,
  user_name: UserName,
  user_has_car,
} = {
  user_name: 'Alex',
  user_age: 28,
};
console.log(UserName, user_age, user_has_car);

const users = ['Alex', 'John', 'Jack'];
const [, , jack] = users;
console.log(jack);

const SERVER_ARRAY = ['Alex', 20];
const [userName = 'Unknown', age = 0, hasCar = false] = SERVER_ARRAY;
console.log(userName, age, hasCar);

const SERVER_OBJ = {
  user_name: 'Alex',
  //   user_age: 28,
};

const { user_name, user_ages: userAge = 0 } = SERVER_OBJ;
console.log(user_name, userAge);
