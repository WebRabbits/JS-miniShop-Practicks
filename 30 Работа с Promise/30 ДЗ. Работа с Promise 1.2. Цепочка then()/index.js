'use strict';

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const videos = [
        { id: 1, title: 'Топ 10 игр 2023' },
        { id: 2, title: 'Лучшая битва в Warcraft3' },
        { id: 3, title: 'Чем кормить кошек' },
      ];

      if (Array.isArray(videos)) {
        resolve(videos);
      } else {
        reject('Ошибка. Тип данных возвращаемых по фильмам некорректный');
      }
    }, 1000);
  });
}

function promise2(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const description = {
        id: 1,
        title: 'Топ 10 игр 2023',
        hashTags: ['игры', '2023'],
        authorId: 55,
      };

      if (id) {
        resolve(description);
      } else {
        reject('Ошибка в получении данных по выбранному видео');
      }
    }, 1000);
  });
}

function promise3(authorId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const author = {
        id: 55,
        name: 'Какие-то уроки',
        videoIds: [1, 2, 3],
        shortIds: [10, 15, 33],
      };

      if (Number(authorId)) {
        resolve(author);
      }
      reject('Ошибка. Получить данные по автору не удалось');
    }, 1000);
  });
}

function promise4(shortsIDArray) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shortRandomID =
        shortsIDArray[Math.floor(Math.random() * shortsIDArray.length)];

      if (Number(shortRandomID)) {
        resolve(shortRandomID);
      }

      reject('Ошибка. Передано некорректное значение ID short-видео');
    }, 1000);
  });
}

function resultGetVideo() {
  promise1()
    .then((data1) => {
      console.log(data1);
      return promise2(data1[0].id);
    })
    .then((data2) => {
      console.log(data2);
      return promise3(data2.authorId);
    })
    .then((data3) => {
      console.log(data3);
      return promise4(data3.shortIds);
    })
    .then((data4) => {
      console.log(data4);
    })
    .catch((error) => {
      console.log(`Error>>> ${error}`);
    })
    .finally(() => {
      console.log('Выполнение Promise закончено');
    });
}

resultGetVideo();
