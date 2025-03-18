'use strict';

// ==============
// ============== Домашнее задание. Практика с Promise.
// ==============

// ============== Написание callbackHell

// promise1 - запрос всех видео
const videos = [
  { id: 1, title: 'Топ 10 игр 2023' },
  { id: 2, title: 'Лучшая битва в Warcraft3' },
  { id: 3, title: 'Чем кормить кошек' },
];

// promise2 - запросить описание этого видео
const id = videos[0].id;

const description = {
  id: 1,
  title: 'Топ 10 игр 2023',
  hashTags: ['игры', '2023'],
  authorId: 55,
};

// promise3 - в описании указан автор, нужно запросить информацию по нему
const authorId = description.authorId;

const author = {
  id: 55,
  name: 'Какие-то уроки',
  videoIds: [1, 2, 3],
  shortIds: [10, 15, 33],
};

// promise4 - пытаемся получить шортс автора

const shortId = author.shortIds[1];

function promise1(callback) {
  setTimeout(() => {
    const videos = [
      { id: 1, title: 'Топ 10 игр 2023' },
      { id: 2, title: 'Лучшая битва в Warcraft3' },
      { id: 3, title: 'Чем кормить кошек' },
    ];

    callback(videos);
  }, 1000);
}

function promise2(id, callback) {
  setTimeout(() => {
    const description = {
      id: 1,
      title: 'Топ 10 игр 2023',
      hashTags: ['игры', '2023'],
      authorId: 55,
    };

    callback(description);
  }, 1000);
}

function promise3(idAuthor, callback) {
  setTimeout(() => {
    const author = {
      id: 55,
      name: 'Какие-то уроки',
      videoIds: [1, 2, 3],
      shortIds: [10, 15, 33],
    };

    callback(author);
  }, 1000);
}

function promise4(shortsIDArray, callback) {
  setTimeout(() => {
    const shortID =
      shortsIDArray[Math.floor(Math.random() * shortsIDArray.length)];

    callback(shortID);
  }, 1000);
}

function runPromise() {
  promise1((allVideo) => {
    console.log(allVideo);

    promise2(allVideo[0].id, (chooseVideo) => {
      console.log(chooseVideo);

      promise3(chooseVideo.authorId, (getDescriptionAuthor) => {
        console.log(getDescriptionAuthor);

        promise4(
          getDescriptionAuthor.shortIds,
          (getShortIDRandomVideoAuthor) => {
            console.log(getShortIDRandomVideoAuthor);
          }
        );
      });
    });
  });
}

runPromise();
