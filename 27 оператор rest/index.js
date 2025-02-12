'use strict';

console.log(`============== Оператор Rest`);

function printUser(params) {
  console.log(params.name, params.age);

  for (const key in params) {
    console.log(key);
  }
}

const user = {
  name: 'Alex',
  age: 18,
  hasCar: true,
};

const { hasCar, ...rest } = user;
// console.log(rest);

printUser(rest);

const cars = ['nissan', 'BMW', 'porshe'];
const [nissan, ...rest1] = cars;
console.log(rest1); // (2) ['BMW', 'porshe']

console.log(`============== Оператор Rest в функциях`);

function printUser1({ hasCar, ...rest }) {
  console.log(rest);
}

const user1 = {
  name: 'Alex',
  age: 18,
  hasCar: true,
};

printUser1(user1);

console.log(`==============`);

function printCars([nissan, ...rest]) {
  console.log(nissan);
  console.log(rest);
}

const cars1 = ['nissan', 'BMW', 'porshe'];

printCars(cars1);

console.log(`==============`);

function calculate(...numbers) {
  console.log(numbers);

  let result = null;
  numbers.forEach((el) => (result += el));

  return result;
}
console.log(calculate(1, 5, 8));
