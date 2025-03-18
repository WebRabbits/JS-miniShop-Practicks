'use script';

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((data) => {
//     return data.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(`ErroR`);
//   });

// ============== Отправка асинхронного запроса при помощи async await
async function getData() {
  // Запрашиваем данные с сервера GET-запросом и получаем ответ с статусом запроса и записываем их в переменную (аналог ПЕРВОГО вызова метода then())
  const dataResponseQuery =
    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=57.8136&longitude=28.3496&
  current=temperature_2m,is_day,wind_speed_10m`);
  console.log(dataResponseQuery);

  // Получаем данные о погоде из полученного ответа и преобразуем их в JSON-формат (аналог ВТОРОГО вызова метода then())
  const dataResultWeather = await dataResponseQuery.json();
  console.log(dataResultWeather);
}

getData();

/** ============== ПРИМЕР №1. ПОЛУЧЕНИЕ И ОБРАБОТКИ ОШИБКИ ПРИ ИСПОЛЬЗОВАНИЕ АСИНХРОННОГО КОДА.
 * Самый простой вариант обработки ошибки - это помещение исполняемого кода в конструкцию try{}catch(){}
 * СЛЕДУЕТ ОТМЕТИТЬ, что, для того чтобы получить данные по полученному результата запроса из блока try{} - требуется СОЗДАТЬ внешнюю переменную в самой функции (например пустой массив в let info = []), И ПРИСВОИТЬ ей значение полученных данных в результате запроса (из второго await)
 * ПОСЛЕ ЧЕГО, полученный результат из блока try{} - будет ДОСТУПЕН за его пределами и обратиться к данным лежащим в переменной info можно свободно по ссылке при обращение к ней.
 *
 * ОДНАКО, СТОИТ ОТМЕТИТЬ, что такое подход является НЕ ОЧЕНЬ ПРАВИЛЬНЫМ, так как есть некая переменная info, которую следует перезаписывать, и её точно также можно переписать и в дальнейшем
 */
// async function errorTest() {
//   let info = [];
//   try {
//     const data = await fetch('test-error.com');
//     info = await data.json();
//     console.log(resultData);
//   } catch (error) {
//     console.log(error);
//   }

//   if (info.length === 0) {
//     return;
//   }

//   const text = info[0].text;

//   console.log('какой-то код');
// }

// errorTest();

/** ============== ПРИМЕР №2. ПОЛУЧЕНИЕ И ОБРАБОТКИ ОШИБКИ ПР ИСПОЛЬЗОВАНИЯ МЕТОДА .catch()
 * При отправки запроса на сервер, при первом await, ЕСЛИ возвращается ошибка - ТО можно вызвать метод .catch() и описать какую-то ошибку.
 * НАПРИМЕР, в методе .catch() - при помощи ключевого слова return вернуть объект вида {error:true}. ПОСЛЕ ЭТОГО можно сделать проверку: "ЕСЛИ возвращается error - то завершаем работу запроса".
 * ПРИ ЭТОМ, программа продолжит работать.
 */

// async function errorTest2() {
//   const data = await fetch('test-error.com').catch((error) => {
//     console.log(`error`, error);
//   });
//   //   const info = await data.json();

//   console.log(data);
//   console.log(`какой-то текст ошибки обработанный через метод .catch()`);
// }

// errorTest2();

// ============== Создания приложения
/**
 * При нажатии кнопку - появляется лоадер загрузки на странице.
 * После того, как данные с сервера пришли - лоадер пропадает и отображаются данные на странице.
 */

const button1 = document.querySelector('.get-data-btn-1');
const button2 = document.querySelector('.get-data-btn-2');
const loading = document.querySelector('.loading');
loading.style.display = 'none';

const URL = `https://api.open-meteo.com/v1/forecast?latitude=57.8136&longitude=28.3496&
current=temperature_2m`;

button1.addEventListener('click', fetchDataPromise);

function fetchDataPromise() {
  addLoader();
  fetch(URL)
    .then((data) => {
      if (data.status === 200) {
        return data.json();
      }
    })
    .then((resultQuery1) => {
      console.log(resultQuery1);
    })
    .finally(() => {
      removeLoader();
    });
}

button2.addEventListener('click', fetchDataAsyncAwait);

async function fetchDataAsyncAwait() {
  addLoader();
  const data = await fetch(URL);

  if (data.ok === true) {
    removeLoader();
    const resultQuery2 = await data.json();
    console.log(resultQuery2);
  }
}

function addLoader() {
  loading.style.display = 'block';
}

function removeLoader() {
  loading.style.display = 'none';
}
