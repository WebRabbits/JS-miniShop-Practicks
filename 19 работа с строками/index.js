'use script';

const str = "te'xt";

console.log(str);
console.log(typeof str);

console.log(`================ Конкатенация`);
const one = 'one';
const two = 'two';
const three = 'three';
const result = one + ' ' + two + ' ' + three;
const result2 = `${one} ${two} ${three}`;
console.log(result);
console.log(result2);

console.log(`================ Свойства/методы строк`);

const str2 = 24.302;
console.log(str2.toString());
const channel = 'Какие-то уроки';
console.log(channel.length);

console.log(channel.toLowerCase());
console.log(channel.toUpperCase());

const splitExample = 'Какие-то уроки помогают узнать JS!';
console.log(splitExample.split(' '));

const test1 = '*'.repeat(10);
console.log(test1);

console.log(
  `================ Методы, которые позволяют найти что-то внутри строки`
);

console.log(channel.indexOf('-'));
console.log(channel.indexOf('*'));
console.log(channel.indexOf('и'));
console.log(channel.lastIndexOf('и'));

console.log(channel.charAt(channel.indexOf('*')));

const url1 = 'https://neprivet.com/';
const url2 = 'https://neprivet.com/img/bad-good.png';
console.log(url2.includes('.com'));
console.log(url2.includes('.Neprivet'));

console.log(url1.startsWith('https:'));
console.log(url1.startsWith('htt:ps'));
console.log(url1.endsWith('.com/'));
console.log(url1.endsWith('.com'));

console.log(`================ Методы, которые позволяют извлечь часть строки`);

const login = '   MyLogin    ';
const login2 = 'MyLogin';
console.log(login.slice(3, 10));
console.log(login.slice(3, -4));
console.log(login2.slice(0, 5));

console.log(login2.substring(1, 3));

const test5 = 'test';
console.log(test5.padStart(10, '_'));
console.log(test5.padEnd(10, '_'));

const name = 'RoMAn';

function correctName() {
  const lowerName = name.toLowerCase().toString();
  console.log(lowerName);

  const sliceName = lowerName.slice(1, lowerName.length);
  console.log(sliceName);

  return lowerName.charAt(0).toUpperCase() + sliceName;
}
// correctName();
const resultCorrectName = correctName();
console.log(`Hi ${resultCorrectName}`);
