'use strict';

/** Тестовый URL адрес для получения погоды
 * https://api.open-meteo.com/v1/forecast?latitude=57.8136&longitude=28.3496&
current=temperature_2m
 */

// Promise
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson(`no-empty-url.com`).catch((error) => {
  console.log(error);
});

// Async Await
async function loadJsonAsyncAwait(url) {
  const data = await fetch(url);
  if (data.status == 200) {
    const result = await data.json();
    console.log(result);
  } else {
    throw new Error(data.status);
  }
  console.log(121212);
}

loadJsonAsyncAwait(`no-empty-url.com`);
