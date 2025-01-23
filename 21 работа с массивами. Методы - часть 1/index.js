'use script';

const array = [];
console.log(array);
console.log(typeof array);
console.log(Array.isArray(array));

array[0] = '10';
array[1] = 4;
console.log(array);

console.log(`============== Добавление элементов в начало/в конец массива`);

const myArray = [1, 2, 3];
myArray.push(4, '14 TEXT', false);
console.log(myArray);

myArray.unshift(0, 55);
console.log(myArray);

console.log(`============== Удаление элементов в начало/в конец массива`);

myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray);

console.log(`============== Конкатенация массивов`);

const myArray1 = [1, 2, 3, { hello: 'world' }];
const myArray2 = [4, 5, true, 6];
const finalConcat = myArray1.concat(myArray2);
console.log(finalConcat);

console.log(`============== Проверка наличия элемента в массиве`);
// Функция .includes() может проверить наличие элемента в массиве, если тип проверяемого элемента относится примитивным типам данным - string, number, boolean.
// При попытке проверки наличия внутри массива вложенного массива, или объекта - ВСЕГДА будет возвращаться значение false.
const myArray3 = [1, 2, '3', { hello: 'world' }, 55.148, true, [85, 'Sen']];
console.log(myArray3.includes('3')); // true
console.log(myArray3.includes({ hello: 'world' })); // false
console.log(myArray3.includes(true)); // true
console.log(myArray3.includes([85, 'Sen'])); // false

console.log(
  `============== Превращение строки в массив, и обратно в строчку по указанному разделителю`
);

const fio = 'Иванов Иван Иванович';

const fioArray = fio.split(' ');
console.log(fioArray);
console.log(fioArray.join('-'));

console.log(
  `============== Сделать из одного массива с вложенными массивами - плоский одномерный массив`
);

const myArray4 = [1, 2, 3, [3], false, [4, ['5', false, [{ key: 'value' }]]]];
console.log(myArray4.flat(3)); // В параметре данного метода задаётся глубина развёртывания массива
console.log(myArray4.flat(Infinity)); // Если вложенность элементов в массиве НЕ ИЗВЕСТНА - удобно использовать тип данных Infinity, Тогда массив будет разворачиваться бесконечно.

console.log(
  `============== Разворачивание элементов массива в обратном направлении`
);

console.log(myArray4.reverse().flat(3));

console.log(`============== Сортировка элементов в массиве`);

const sortArray = [1, 2, 3, 3, 15, '36.5', 15, true, 10, 'Text'];
console.log(sortArray);
console.log(sortArray.sort());
console.log(sortArray.sort((a, b) => a - b)); // Отсортирует в порядке возрастания.
console.log(sortArray.sort((a, b) => b - a)); // Отсортирует в порядке убывания.

console.log(`============== Форматирование массива/части массива`);
// .slice() - позволяет получить новый массив, копируя диапазон значений из исходного массива. Значения берутся от первого индекса до последнего (значение по ПОСЛЕДНЕМУ указанному индексу НЕ ВКЛЮЧАЕТСЯ в копию)
console.log(`============== .slice()`);
const myArray5 = [58, 36.98, 'банан', false, 'вишня', [false], 'hors', 589];
const newMyArray5 = myArray5.slice(1, 6);
console.log(myArray5); // Вернёт исходный массив. Массив НЕ ИЗМЕНЁН - (8) [58, 36.98, 'банан', false, 'вишня', Array(1), 'hors', 589]
console.log(newMyArray5); // Вернёт копию исходного массива обрезанную от 1-ого до 6-ого индекса (элемент под индексом [6] НЕ ВКЛЮЧЕН В НОВЫЙ МАССИВ - (5) [36.98, 'банан', false, 'вишня', [false]])

console.log(`============== .splice()`);
// .splice() - позволяет изменить исходный массив. Позволяет произвести удаление/добавление/замену элементов в массиве.
// Принимает три аргумента:
// Первый - начальный индекс с которого будет производится изменение массива
// Второй - конечный индекс, до которого будет производится удаление элементов из массива. ПРИ ЭТОМ, данный индекс БУДЕТ ВКЛЮЧЕН В ИЗМЕНЕНИЯ.
// Третий и последующие индексы - будут добавлять элементы в массив.

const items = [
  'HTML',
  'CSS',
  'JavaScript',
  'recipes',
  'accessibility',
  null,
  14,
  58,
  false,
  89.103,
];

// console.log(items.splice(1, 3)); // Вернёт значение ['CSS', 'JavaScript', 'recipes'] которые будут удалены из массива
// console.log(items); // Вернёт изменённый массив ['HTML', 'accessibility', null, 14, 58, false, 89.103]

// console.log(items.splice(3, 2)); // Вернёт значение ['recipes', 'accessibility'] которые будут удалены из массива
// console.log(items); // Вернёт изменённый массив ['HTML', 'CSS', 'JavaScript', null, 14, 58, false, 89.103]

// console.log(items.splice(4, 0, 'петя')); // Добавит значение элемента в массиве с индексом [4] на значение 'петя'. При этом, ранее находившееся значение по данному индексу "accessibility" сдвинется на один индекс вперёд и получит значение индекса [5]
// console.log(items); // Вернёт изменённый массив (11) ['HTML', 'CSS', 'JavaScript', 'recipes', 'петя', 'accessibility', null, 14, 58, false, 89.103]

// console.log(items.splice(1, 0, 'Игорь', 'Мага')); // Добавит значения элементов в массиве с индексом [1], [2] c значениями 'Игорь', 'Мага'. При этом, ранее находившиеся значения начиняющиеся с индекса [1] будут сдвинуты вперёд.
// console.log(items); // Вернёт изменённый массив (12) ['HTML', 'Игорь', 'Мага', 'CSS', 'JavaScript', 'recipes', 'accessibility', null, 14, 58, false, 89.103]

console.log(items.splice(1, 3, { value: '14.14' })); // Удалит значения с индекса [1] по индекс [3] ВКЛЮЧИТЕЛЬНО. ТО ЕСТЬ удалит значения (3) ['CSS', 'JavaScript', 'recipes']. На их место добавиться новый элемент { value: '14.14' } который будет иметь индекс [1]
console.log(items); // Вернёт изменённый массив ['HTML', { value: '14.14' }, 'accessibility', null, 14, 58, false, 89.103]

console.log(`==============`);
console.log(`============== Цикл forEach()`);

const myArray6 = [1, 2, 3, 4, false, [5, '7'], 'Петя Грудкин'];

myArray6.forEach((element) => console.log(element));

console.log(`==============`);
console.log(`==============`);
console.log(`============== ДЗ`);
// Задача №1. имеется строка состоящая из хэштегов для YouTube.
// const fromYou = 'lesson,lessons,Для новичков,Для начинающих,Создать сайт,css,css3,Курсы по css';
// ТРЕБУЕТСЯ - получить строчку хэштегов для RuTube в следующем виде: '#lesson #lessons #для_новичков #для_начинающих #создать_сайт #css #css3 #курсы_по_css';

const fromYou =
  'lesson,lessons,Для новичков,Для начинающих,Создать сайт,css,css3,Курсы по css';

function convertHashTag(tag, iconTag, separator) {
  const newArrayTag = tag.split(',');

  resultStringTag = '';
  newArrayTag.forEach((el) => {
    resultStringTag += `${iconTag}${el.replaceAll(
      ' ',
      '_'
    )}${separator}`.toLowerCase();
  });

  return resultStringTag;
}

const resultStr = convertHashTag(fromYou, '#', ' ');
console.log(resultStr); // #lesson #lessons #для_новичков #для_начинающих #создать_сайт #css #css3 #курсы_по_css
// const resultStr = convertHashTag(fromYou, '%', '> ');
// console.log(resultStr);
