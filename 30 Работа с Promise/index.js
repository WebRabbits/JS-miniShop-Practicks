'use strict';

// ============== Реализация callbackHell из функций получений данных пл пользователю и его играм.
/* В одной функции run() мы получаем данные из двух других функций:
 * fetchUserInfo() - получаем данные по пользователю. Данная функция принимает callback-функцию, которая будет принимать и возвращать данные с сервера по пользователю в функцию run() - {id: 1, name: 'Alex'}
 * fetchUserGames() - получает данные по играм пользователя при переданному id пользователя в данную функцию. Также, данная функция принимает callback-функцию, которая будет принимать и возвращать данные по полученным играм соответствующего пользователя по его ID - ['game1', 'game2']
 * ТЕМ САМЫМ, при просмотре самой функции run(), видно, что внутри функции вызываются другие функции, у которых асинхронные запросы зависят друг от друга по принимаемым значениям, и код расширяется в право.
 */

// function fetchUserInfo(callback) {
//   setTimeout(() => {
//     // fetch
//     const data = { id: 1, name: 'Alex' };
//     callback(data);
//   }, 1000);
// }

// function fetchUserGames(id, callback) {
//   setTimeout(() => {
//     // fetch(id)
//     const data = ['game1', 'game2'];
//     callback(data);
//   });
// }

// function run() {
//   fetchUserInfo((userInfo) => {
//     console.log(userInfo);

//     fetchUserGames(userInfo.id, (userGames) => {
//       console.log(userGames);
//     });
//   });
// }

// run();

// ============== Как создаются Promise (на примере функции run())

/**
 * Пример работы Promise и синхронного/асинхронного кода при выполнении функции получения данных с сервера (данные с сервера получаются в виде выполнении setTimeout())
 * 
 * 
 * ФУНКЦИЯ, в которой в разный момент времени вызваны console.log() функции для расмотра понимания работы синхронного и асинхронного кода.
  function run() {
  console.log('test1');
  const data = new Promise((resolve, reject) => {
    console.log('test4');
    setTimeout(() => {
      // fetch
      const data = { id: 1, name: 'Alex' };

      console.log('test5');
      resolve(data);
      console.log('test6');
    }, 1000);
  });

  console.log('test2');

  data.then((userData) => {
    console.log(userData);
    console.log('test7');
  });

  console.log('test3');
}

run();

 * ИТОГЕ ВЫЗОВА console.log() и получения данных с сервера:
test1 - Выводится первым, так как это самое начало функции.
test4 - Выводится вторым, так как создания Promise это СИНХРОННАЯ операция.
test2 - Выводится третьим, так как внутри функции начинается выполнения асинхронной операции и код "забывается" на некоторый промежуток времени и выполняется console.log('test2') за пределами Promise.
test3 - Выводится четвёртым, так как внутри функции начинается выполнения асинхронной операции и код "забывается" на некоторый промежуток времени, при этом функция then() ещё не вызвана, так как асинхронный код НЕ ВЫПОЛНИЛСЯ и выполняется console.log('test3') за пределами Promise и асинхронной операции.
test5 - Выводится пятым. Начинается выполнение асинхронной операции
test6 - Выводится шестым. Так как данные с сервера ещё не получены.
{id: 1, name: 'Alex'} - Выводится седьмым. Приходят данные из асинхронной операции и попадают в функцию then().
test7 - Выводится восьмым. Заканчивается выполнение асинхронного кода.
 */

function fetchUserData() {
  // Возвращается САМ Promise из данной функции
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // fetch
      const data = { id: 1, name: 'Alex' };
      // const data = null;
      if (data !== null) {
        resolve(data);
      } else {
        reject('Ошибка в первом Promise');
      }
    }, 1000);
  });
}

function fetchUserGames(id) {
  return new Promise((resolve, reject) => {
    //  const data = ['game1', 'game2'];
    const data = { name: 'game1', name: 'game2' };
    if (Array.isArray(data)) {
      resolve(data);
    } else {
      reject('Ошибка в втором Promise');
    }
  });
}

function run() {
  fetchUserData()
    .then((userData) => {
      console.log(userData);
      return fetchUserGames(userData.id);
    })
    .then((userGames) => {
      console.log(userGames);
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
    })
    .finally(() => {
      console.log('Promise завершился');
    });
}

run();

// ============== Пример №2. Работа с Promise.

//// Получаем данные с сервера по играм через setTimeout(). В функции сразу возвращается Promise, в котором происходит resolve() полученных данных с сервера по играм.
function fetchGames() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const gamesFromServer =
      //   'какая-то строка возвращается с сервера, котору мы НЕ ОЖИДАЛИ получить.';

      const gamesFromServer = [
        { id: 1, name: 'Человек паук' },
        { id: 2, name: 'Марио' },
      ];

      if (Array.isArray(gamesFromServer)) {
        resolve(gamesFromServer);
      } else {
        reject('Ошибка! Пришли некорректные данные с сервера...');
      }

      // resolve(gamesFromServer);
    }, 2000);
  });
}

//// Функция, которая создаёт "Загрузку" в момент получения данных с сервера и выводит на страницу текст "Loading..."
function renderLoading() {
  const body = document.querySelector('body');

  const loading = document.createElement('div');
  loading.id = 'loading';
  loading.innerText = 'Loading...';

  body.append(loading);
}

//// Функция, которая находит на странице элемент с идентификатором #id и удаляет данный элемент их DOM.
function removeLoading() {
  const loading = document.querySelector('#loading');
  loading.remove();
}

function showError(error) {
  const body = document.querySelector('body');

  const errorMessageBlock = document.createElement('div');
  errorMessageBlock.innerText = error;

  body.append(errorMessageBlock);
}

//// Функция, которая отрисовывает полученные данные по играм из полученного Promise при вызове функции then(). Функция НИЧЕГО НЕ ВОЗВРАЩАЕТ, так как она просто отрисовывает полученные данные.
function renderGames(games) {
  const body = document.querySelector('body');

  games.forEach((game) => {
    const gameElement = document.createElement('div');
    gameElement.innerText = `Игра: ${game.name}`;
    gameElement.classList.add = 'game-element';

    body.append(gameElement);
  });
}

//// Вызывается функция показа загрузки страницы.
renderLoading();

//// Вызывается функция получения данных с сервера для получения игр. В функции then() принимается в виде параметра "game" полученный массив игр с сервера.
fetchGames()
  .then((games) => {
    //// Вызывается функция удаления Loader с страницы.
    removeLoading();

    //// Вызывается функция отрисовки данных по играм на странице. В функцию передаётся ранее полученный массив игр из аргумента "games".
    renderGames(games);
  })
  .catch((messageError) => {
    removeLoading();
    showError(messageError);
  });

// ============== Пример №3. Работа с Promise.
// Запрос на сервер для получения видео и shorts-видео с YouTube (пока что для примера реализуется через функцию setTimeout())

// Использование методов обработки Promise.
/**
 * Все методы вызываются одинаковы, и также в них одинаково передаются полученные ранее промисы для их исполнения.
 * Данные ниже описанные методы - позволяют выполнять все промисы ПАРАЛЛЕЛЬНО друг другу.
 * 1. Все промисы в передаются в некий массив одного из выбранных методов.
 * 2. Промисы передаются через запятую.
 * 3. Удобно получать промисы через отдельные функции, и после этого производить вызов данных функций с зарезолвленными промисами в массив выбранного метода.
 * 4. Всего есть четыре метода обработки Promise. Отличаются данные методы
 * друг от друга по сути только обработкой ошибок полученных при выполнении промисов:
 * - Promise.all() - дожидается выполнения всех промисов.
 * Если все промисы выполнились успешно - то попадаем в секцию .then().
 * Если хотя бы один промис выполнился с ошибкой - то попадаем в секцию catch().
 * - Promise.allSettled() - дожидается выполнения всех промисов и в любом случаи, даже при получении ошибки в любом из промисов - попадает в секцию then().
 * - Promise.race() - вернёт сразу первый выполненный промис.
 * Если выполненный первый промис выполнился успешно - то попадаем в секцию then().
 * Если выполненный первый промис выполнился неуспешно - то попадаем в секцию catch().
 * - Promise.any() - вернёт самый первый успешный полученный промис, даже если в самом начале какой-то из промисов будет выполнен в с ошибкой. По сути всегда попадает в секцию then().
 */

function fetchVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ['видео1', 'видео2'];
      console.log('данные по видео получены');

      resolve(data);
      reject('Ошибка при получении видео');
    }, 3000);
  });
}

function fetchShortsVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ['шортс1', 'шортс2', 'шортс3'];
      console.log('данные по shorts-видео получены');

      if (data.length == 2) {
        resolve(data);
      } else {
        reject('Ошибка получения shorts-видео!');
      }
    }, 2000);
  });
}

function mainShowYouTubeAllVideos() {
  console.log('Загрузка...');

  // При данном условии получения данных в функция при резолве промисов - будет получена ошибка: "ERROR Ошибка получения shorts-видео!", так как по условию резолва промиса, данные не проходят. Массивы видео НЕ БУДУТ ПОЛУЧЕНЫ.
  /*Promise.all([fetchVideo(), fetchShortsVideo()])
    .then((data) => {
      console.log('OK', data);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });*/

  // Будет выполнен всегда УСПЕШНО! Вернёт массив объектов выполненных промисов. В первом объекте вернётся "status":"fulfilled" в котором возвращается массив видео. В втором объекте вернётся "status":"rejected" и в свойстве "reason":"Ошибка получения shorts-видео!" вернётся полученная ошибка при резолве промиса.
  /*Promise.allSettled([fetchVideo(), fetchShortsVideo()])
    .then((data) => {
      console.log('OK', data);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });*/

  // В зависимости от того, какой промис будет выполнен первым - произойдёт переход в соответствующую секцию then() или catch().
  /*Promise.race([fetchVideo(), fetchShortsVideo()])
    .then((data) => {
      console.log('OK', data);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });*/

  // Всегда вернёт ПЕРВЫЙ УСПЕШНЫЙ ПОЛУЧЕННЫЙ ПРОМИС. То есть, вернёт промис с массивом данных "OK (2) ['видео1', 'видео2']".
  Promise.any([fetchVideo(), fetchShortsVideo()])
    .then((data) => {
      console.log('OK', data);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });
}

mainShowYouTubeAllVideos();
