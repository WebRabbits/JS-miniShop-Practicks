'use script';

// Работа с объектов даты Date
console.log(`============== Работа с объектов даты Date`);

console.log(new Date(2017, 0, 1, 15, 30, 10)); // Обычный формат передачи и создании даты в ручную

// console.log(new Date('YYYY-MM-DDTHH:mm:ss.ssZ'));
console.log(new Date('2017-01-02T15:10:15Z'));
/** Время в формате ISO 8601.
Данный формат даты предлагает передачу значений в формате:
* YYYY - Год
* MM - Месяц. Начинается с единицы и будет иметь формат представления месяца начиная с 01, 02, 03...12
* DD - День. Начинается с единицы и будет иметь формат представления месяца начиная с 01, 02, 03...NN
* T - Разделитель, который говорит в данном формате, что дальше будет указываться время.
* HH - Часы. Также имеют формат 01, 02, 03...24
* mm - Минуты. Также имеют формат 01, 02, 03...60
* ss - Секунды. Также имеют формат 01, 02, 03...60
* sss - Миллисекунды. Также имеют формат 01, 02, 03...60/ В зависимости от кол-ва переданных "sss" будет зависеть кол-вот отображаемых миллисекунд.
* Z - Символ обозначающий что время передаётся в формате UTC.
*/

// console.log(new Date(timestamp));
console.log(new Date(1739223547000));
/**Unix время ИЛИ Timestamp
 * Это время начинающее с 01.01.1970 передающаяся в секундах
 * СЛЕДУЕТ ОТМЕТИТЬ, что время в объекте new Date() принимается в МИЛЛИСЕКУНДАХ, а время в формате Unix считается в секундах. Поэтому значение Timestamp следует умножать на 1000 мс (в 1 секунду - 1000 миллисекунд)
 */

console.log(`============== Подробнее про работу с timestamp`);

console.log(Date.now()); // Метод .now() позволяет текущее значение Timestamp в миллисекундах
console.log(new Date(1739225083907));

const date = new Date();
console.dir(date);
console.log('.toDateString() - ' + date.toDateString()); // .toDateString() -
console.log('.toGMTString() - ' + date.toGMTString()); // .toDateString() -
console.log('.toISOString() - ' + date.toISOString()); // .toDateString() -
console.log('.toJSON() - ' + date.toJSON()); // .toDateString() -
console.log('.toLocaleDateString() - ' + date.toLocaleDateString()); // .toDateString() -
console.log('.toLocaleString() - ' + date.toLocaleString()); // .toDateString() -
console.log('.toLocaleTimeString() - ' + date.toLocaleTimeString()); // .toDateString() -
console.log('.toTimeString() - ' + date.toTimeString()); // .toDateString() -
console.log('.toUTCString() - ' + date.toUTCString()); // .toDateString() -
console.log('.toString() - ' + date.toString()); // .toDateString() -

console.log(date.getTime()); // Возвращает Timestamp в миллисекундах в строчном формате.
console.log(date.getHours()); // Вернёт текущее время - Часы
console.log(date.getMinutes()); // Вернёт текущее время - Минуты
console.log(date.getSeconds()); // Вернёт текущее время - Секунды
console.log(date.getFullYear()); // Вернёт текущую дату - Год в формате 'YYYY'
console.log(date.getMonth()); // Вернёт текущую дату - Месяц в формате 'M'. Месяца в данной функции начинаются с НУЛЯ.
console.log(date.getDate()); // Вернёт текущую дату - День в формате 'DD'

console.log(`============== Часовые пояса при работе с датой`);
// GMT - формат времени по Гринвичу (по нулевому меридиану)
// UTC - более точный вариант времени так как он учитывает високосную секунду. Считается более предпочтительным вариантом времени
// В UTC формате времени, в конце строки даты передаётся буква Z, которая говорит о том, что к данной дате применён текущий часовой пояс (в моём случаи, это +3 часа)
console.log(new Date('2024-02-11T01:29:33Z')); // Данная дата вернётся с значением в +3 часа с УЧЁТОМ ТЕКУЩЕГО ЧАСОВОГО ПОЯСА - Sun Feb 11 2024 04:29:33 GMT+0300 (Москва, стандартное время)

/** При использовании функций для получения любого значения даты/времени в формате UTC
 * например .getUTCHours(), .getUTCMinutes()
 * Значения будут выводится БЕЗ УЧЁТА ЧАСОВОГО ПОЯСА.
 * То есть, если текущее время == 01 час ночи, то в UTC формате будет 22 часа.
 */

console.log(date.getUTCHours());

console.log(`============== Конвертации даты`);

console.log(date.toISOString()); // Вернётся значение:
// Из формата -  Tue Feb 11 2025 01:04:43 GMT+0300 (Москва, стандартное время)
// В формат UTC - 2025-02-10T22:43:01.043Z (не будет учитываться текущий часовой пояс в значение +3)

console.log(date.toDateString()); // Вернётся значение в формате - Tue Feb 11 2025

console.log(date.toLocaleDateString()); // Вернётся значение даты в локальном формате записи даты - 11.02.2025
// В качестве аргумента можно передать локаль в которой следует выводить дату и время

console.log(date.toLocaleTimeString()); // Вернётся значение времени в локальном формате записи даты - 01:47:32
// В качестве аргумента можно передать локаль в которой следует выводить дату и время

console.log(date.toLocaleString('en-GB')); // Вернётся значение даты и времени в текущем локальном формате даты - 11/02/2025, 01:51:00
// В качестве аргумента можно передать локаль в которой следует выводить дату и время

console.log(`==============`);
console.log(`==============`);
console.log(`============== ДЗ №1.`);
/**
 * Передаётся любая дата в любом корректном формате.
 * Функция должна обработать переданную ей дату и вернуть значение ДНЯ НЕДЕЛИ в "коротком" формате записи.
 */

function getWeekDay(date) {
  const dayNumberFormat = {
    0: 'вс',
    1: 'пн',
    2: 'вс',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'сб',
  };

  let resultGetDay = '';

  for (let key in dayNumberFormat) {
    key = Number(key);
    const val = dayNumberFormat[key].toUpperCase();

    if (new Date(date).getDay() == key) {
      return (resultGetDay = val);
    }
  }

  return (resultGetDay = 'Вы передали некорректное значение.');
}

console.log(getWeekDay(Date.now()));
console.log(getWeekDay('2017-05-05T15:00'));
console.log(getWeekDay(new Date(2016, 1, 10)));

// БОЛЕЕ ПРОСТОЙ И УДОБНЫЙ ВАРИАНТ ДЛЯ РЕШЕНИЯ ЗАДАЧИ - ИСПОЛЬЗОВАТЬ ОБЪЕКТ Intl, в результате которого вернётся обозначение дня недели в "коротком" формате записи.
// console.log(
//   new Intl.DateTimeFormat('ru-RU', { weekday: 'short' })
//     .format(Date.now())
//     .toUpperCase()
// );

console.log(`============== ДЗ №2.`);
/**
 * Передаётся любая дата в любом корректном формате.
 * Функция должна обработать переданную ей дату и вернуть значение:
 * "сегодня", "завтра", "вчера", ЛИБО вернуть переданную ей дату в формате "01.01.2017"
 */

function getFriendlyDate(date) {
  const toDay = Date.parse(new Date());
  const receivedDate = Date.parse(new Date(date));

  const differenceDay = Math.floor(
    (toDay - receivedDate) / (1000 * 60 * 60 * 24)
  );

  return differenceDay === 0
    ? `сегодня ${new Date(receivedDate).toLocaleDateString()}`
    : differenceDay === 1
    ? `вчера ${new Date(receivedDate).toLocaleDateString()}`
    : differenceDay < 0
    ? `завтра ${new Date(receivedDate).toLocaleDateString()}`
    : new Date(receivedDate).toLocaleDateString();
}

console.log(getFriendlyDate(Date.now()));
console.log(getFriendlyDate(new Date(2025, 1, 11)));
console.log(getFriendlyDate(new Date(2025, 1, 13)));
console.log(getFriendlyDate(new Date('2024-01-10T17:08:39')));
