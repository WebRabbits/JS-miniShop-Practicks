'use script';

// ============== Работа с FETCH

//// https://jsonplaceholder.typicode.com/posts

/** Типовая конструкция FETCH-запроса на обработку полученного промиса из запроса
 * 1. Формируется сам FETCH-запрос
 * 2. В первом then() - возвращается Promise, который требуется обработать при помощи метода .json() и вернуть его результат при помощи ключевого слова return
 * 3. В втором then() - мы получаем ранее обработанной промис и уже получаем его результат при вызове в втором then() анонимной стрелочной коллбэк-функции. ТО ЕСТЬ, на данном этапе мы УЖЕ ПОЛУЧАЕМ РЕЗУЛЬТАТ.
 
 fetch('https://jsonplaceholder.typicode.com/users')
  .then((data) => {
    return data.json();
  })
  .then((result) => {
    console.log(result);
  });
 */

// Method GET - получает данные с сервера. В втором then() - мы получаем результат на отправленный запрос, который возвращает сам сервер.
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
})
  .then((data) => {
    if ((data.status = 200)) {
      return data.json();
    } else {
      console.error('Ошибка! Нет такой страницы на сервере!');
    }
  })
  .then((result) => {
    console.log(result);
  });

// Method POST - позволяет отправить данные на сервер. При этом запросе, вторым параметром в функции fetch() передаётся объект данных, который включает в себя
/**
 * method - указывается тип метода отправляемого запроса (в данном случаи это POST)
 * body - тело запроса. ТО ЕСТЬ, это те данные, которые будут отправлены на сервер. Данные передаются JSON-строкой при помощи функции JSON.stringify(объект_с_данными)
 * headers - заголовки. Передаются заголовки к серверу, которые будут ему говорить о том, как именно сервер должен обработать данный запрос.
 * ПОСЛЕ ЧЕГО, для обработки полученного ответа от сервера на отправленный POST-запрос - также используется цепочка then(), где, в втором then() - будет непосредственно получен ОТВЕТ ОТ САМОГО СЕРВЕРА на данный POST-запрос (скорее всего сервер вернёт либо новую созданную запись, либо какой-то свой статус ответа).
 */
const newPost = {
  userId: 11,
  //   id: 101,
  title: 'TEST newPost title',
  body: 'TEST newPost description',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(newPost),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((data) => {
    return data.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
  });

// Method DELETE - позволяет удалить какие-то данные на сервере по переданному запросу.
/**
 * При обработке ответа полученного от сервера при отправки данного запроса через цепочку then() - может вернуться какой-то ответ от сервера, который будет сообщать нам, что данные на сервере по отправленному запросу действительно удалены.
 */
fetch('https://jsonplaceholder.typicode.com/posts/101', {
  method: 'DELETE',
})
  .then((data) => {
    return data.json();
  })
  .then((resultJSONDelete) => {
    console.log(resultJSONDelete);
  });

// Method PUT - позволяет ПОЛНОСТЬЮ изменить данные на сервере по какой-то сущности (пост, комментарий, юзера, и т.д. Всё зависит от контекста обновляемых данных)
/**
 * method - указывается тип метода отправляемого запроса (в данном случаи это PUT)
 * body - тело запроса. ТО ЕСТЬ, это те данные, которые будут отправлены на сервер. Данные передаются JSON-строкой при помощи функции JSON.stringify(объект_с_данными)
 * headers - заголовки. Передаются заголовки к серверу, которые будут ему говорить о том, как именно сервер должен обработать данный запрос.
 * ПОСЛЕ ЧЕГО, для обработки полученного ответа от сервера на отправленный POST-запрос - также используется цепочка then(), где, в втором then() - будет непосредственно получен ОТВЕТ ОТ САМОГО СЕРВЕРА на данный PUT-запрос (скорее всего сервер вернёт текущую изменённую запись с изменёнными данными, либо какой-то свой статус ответа).
 */
fetch('https://jsonplaceholder.typicode.com/posts/9', {
  method: 'PUT',
  body: JSON.stringify({
    userId: 9,
    id: 9,
    title: 'TEST newPost title 10 UserId',
    body: 'TEST newPost description 10 USerId',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((resultJSONPut) => {
    console.log(resultJSONPut);
  });

// ============== Получение температуры в городе по переданным Query параметрам в запросе

const urlTownWeather = `https://api.open-meteo.com/v1/forecast?latitude=57.8136&
longitude=28.3496&
current=temperature_2m,is_day,wind_speed_10m`;

fetch(urlTownWeather)
  .then((data) => {
    return data.json();
  })
  .then((result_weather) => {
    renderWeather(result_weather);
  });

function renderWeather(weather) {
  console.log(weather);
  const temperature = weather.current.temperature_2m;
  const celciusIcon = weather.current_units.temperature_2m;
  const isDay = weather.current.is_day == 0 ? 'Ночь' : 'День';
  const windSpeed = weather.current.wind_speed_10m;

  const pBlockTemp = document.createElement('p');
  pBlockTemp.classList.add('temperature_block');
  pBlockTemp.innerText = `Температура в городе Псков: ${temperature} ${celciusIcon}`;

  const pBlockIsDay = document.createElement('p');
  pBlockIsDay.classList.add('isDay_block');
  pBlockIsDay.innerText = `На улице: ${isDay}`;

  const pBlockIsWindSpeed = document.createElement('p');
  pBlockIsWindSpeed.classList.add('wind_speed_block');
  pBlockIsWindSpeed.innerText = `Скорость ветра: ${windSpeed} км/ч`;

  document.body.append(pBlockTemp, pBlockIsDay, pBlockIsWindSpeed);
}

// ============== Работа с HTTP-клиентом Axios для отправки FETCH-запросов https://axios-http.com/ru/docs/intro

const varAxiosData = axios.get(urlTownWeather);
console.log(varAxiosData);

axios.get(urlTownWeather).then((response) => {
  console.log(response);
  console.log(response.data.current.time);
});

axios
  .post('https://jsonplaceholder.typicode.com/posts', {
    title: 'new POST Query Axios',
  })
  .then((responsePostAxios) => {
    console.log(responsePostAxios);
  });
