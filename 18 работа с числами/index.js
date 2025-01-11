'use script';

const test = 0.2 + 0.4;

console.log(test);
console.log(typeof test);
console.log(NaN === NaN);

console.log(`=================== ceil`);

console.log(Math.ceil(0.1));
console.log(Math.ceil(0.5));
console.log(Math.ceil(0.9));

console.log(`=================== floor`);

console.log(Math.floor(0.1));
console.log(Math.floor(0.5));
console.log(Math.floor(0.9));

console.log(`=================== round`);

console.log(Math.round(0.1));
console.log(Math.round(0.4));
console.log(Math.round(0.5));
console.log(Math.round(0.9));
console.log(Math.pow(2, 6));

console.log(`=================== toFixed`);

const test2 = 5.999999999;
console.log(test2.toFixed(3));
console.log(test2.toFixed(0));
console.log((5.154884).toFixed(3));

console.log(`=================== Преобразование строки в число`);

console.log(Number('9.99'));
console.log(Number('9.99 ghbdtn'));
console.log(+'21.25');
console.log(Number.parseFloat('14.25px'));
console.log(Number.parseFloat('14.25 px'));
console.log(Number.parseFloat('14.px25'));
console.log(Number.parseFloat('225 шт.'));
console.log(Number.parseFloat('px 14.25'));

console.log(Number.parseInt('14.25px'));
console.log(Number.parseInt('14.25 px'));
console.log(Number.parseInt('14.px25'));
console.log(Number.parseInt('px 14.25'));

console.log(`=================== Функции проверки числа`);

const test3 = 123 / 'test';
console.log(Number.isNaN(test3)); // true/false
console.log(Number.isNaN(144.02));
console.log(Number.isNaN(144));

const test4 = 124.45;
console.log(Number.isInteger(test4)); // true/false

console.log(`=================== Рандомное число`);

function getRandomNumber(min, max) {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
}

const resultGetRandomNumber = getRandomNumber(1, 15);
console.log(resultGetRandomNumber);
