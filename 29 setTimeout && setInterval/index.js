'use strict';

console.log(`============== setTimeout(); setInterval()`);

// const idTimeout = setTimeout(() => {
//   console.log('2');
// }, 1);

// const idTimeout2 = setTimeout(() => {
//   console.log('2');
// }, 0);

// const idInterval = setInterval(() => {
//   console.log('10');
// }, 1000);

// console.log(1, idTimeout, idTimeout2);

// console.log(3, idInterval);

// setTimeout(() => {
//   clearTimeout(idTimeout);
//   clearInterval(idInterval);
// }, 4000);

console.log(`============== setTimeout(); setInterval() Практика`);
// Функция, которая позволяет делать запросы на сервер через разные промежутки времени и останавливает их через определённый промежуток времени.
/**
 * timerId - идентификатор запроса (для более понятного дебага)
 * start - промежуток времени в 1сек через которую будет выполняться отправка запроса на сервер.
 * stop - через какой промежуток времени следует остановить отправку запроса.
 */

function startTimer(timerId, start, stop) {
  const id = setInterval(() => {
    console.log(`... какой-то запрос на сервер ${timerId}`);
  }, start);

  setTimeout(() => {
    clearInterval(id);
  }, stop);
}

startTimer(1, 1000, 6000);
startTimer(2, 2000, 10000);
