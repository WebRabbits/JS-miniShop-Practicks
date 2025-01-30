'use strict';

// flat, endsWith, parseInt, padStart, Math.ceil, Object.values, forEach, сonсat, зкранирование,
// toFixed, isInteger, map, Object.entries, for in, some, unshift, Math. round, length, index0f,
// toString, push, Number, toUpperCase, pop, toLowerCase, includes, JSON.parse, reduce,
// Math.random, find, Math.floor, trim, Array.isArray, repeat, replaceAll, JSON.stringify,
// startsWith, filter, shift, trimStart, конкатенация, Math.pow, charAt,
// reverse, Object.keys, replace, padEnd, parseFloat, join, trimEnd, isNaN, split

// String: endsWith, padStart, экранирование, length, indexOf, toString, toUpperCase, toLowerCase, trim, repeat, replaceAll, startsWith, trimStart, конкатенация, charAt, replace, padEnd, trimEnd, split, concat, Number, includes

// Number: parseInt, Math.ceil, toFixed, isInteger, Math.round, toString, Number, Math.random, MAth.floor, Math.pow, parseFloat, isNaN

// Array: flat, forEach, concat, map, some, unshift, length, toString, push, pop, includes, reduce, find, Array.isArray, filter, shift, reverse, join, indexOf

// Object: Object.values, Object.entries, for in, JSON.parse, JSON.stringify, Object.keys, toString

console.log(`============== Большая практическая задача`);

// 1. Форматируем данные до нормального вида
// 1.1. Цена должна быть числом
// 1.2. Формируем финальную цену, учитывая скидку
// 1.3. hashTags должен быть всегда плоским массивом
// 1.4. Имя игры не должно содержать пробелов по бокам
// 2. Формируем массив отформатированных и проблемных игр.
// 2.1. Выводим в консоль данные, про эти проблемные игры в виде:
// 'Игра "the last of us" имеет проблемы с данными: Цена уходит в минус.'
// 'Игра "death stranging" имеет проблемы с данными: Дубликат, Отсутствие данных.'

const discounts = [
  [5, { value: 100, cond: 150 }],
  [10, 200],
  [15, 300],
  [20, 500],
];

// console.log(discounts[0][1].value);

const games = [
  {
    id: 1,
    name: ' death stranging   ',
    price: '1000rub',
    description:
      'Компьютерная игра в жанре action с открытым миром, разработанная...',
    link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
    discountType: null,
    hashTags: ['Шутер', ['Приключения,Доставка еды']],
  },
  {
    id: 2,
    name: 'the last of us   ',
    price: 300,
    description:
      'Компьютерная игра в жанре action-adventure с элементами survival horror...',
    link: '   https://ru.wikipedia.org/wiki/The_Last_of_Us    ',
    discountType: 20,
    hashTags: ['Стелс', 'Экшен', 'Приключения'],
  },
  {
    id: 3,
    name: 'death stranging',
    price: null,
    description: null,
    discountType: null,
    hashTags: [],
  },
  {
    id: 4,
    name: 'SHREK 2: THE GAME',
    price: '321',
    description: 'Игра про зеленого мужика, который всем нравится',
    discountType: 5,
    hashTags: [['Шутер,Приключения'], 'Хоррор', 'Криминал'],
  },
  {
    id: 5,
    name: 'GTA 3',
    price: 20.512830102,
    description: 'Игра про безумного мужика, который всем нравится',
    discountType: 5,
    hashTags: undefined,
  },
];

//// 1.

const formattedGames = new Array();
const problemGames = new Array();

games.forEach((game) => {
  // console.log(game);

  const price = !game.price
    ? 0
    : Number(Number.parseFloat(game.price).toFixed(2));

  const discountData = discounts.find((discount) => {
    if (typeof discount[1] !== 'number' && discount[1].cond > price) {
      return false;
    }

    if (discount[0] === game.discountType) {
      return true;
    }
  });

  const discountValue = Array.isArray(discountData) ? discountData[1] : 0;
  // console.log(discountValue);

  const numericDiscount =
    typeof discountValue === 'number' ? discountValue : discountValue.value;

  // console.log(numericDiscount);

  const arrayHasTagsFlat = !game.hashTags
    ? []
    : game.hashTags.length == 0
    ? game.hashTags
    : game.hashTags.flat(Infinity).join(',').split(',');
  // console.log(arrayHasTagsFlat);

  const newGameFormat = {
    id: game.id,
    name: game.name.trim(),
    finalPrice: price - numericDiscount,
    description: game.description,
    hashTags: arrayHasTagsFlat,
  };

  if ('link' in game) {
    newGameFormat.link = game.link.trim();
  }

  if (newGameFormat.finalPrice < 0 && newGameFormat.name) {
    const reasons = ['Цена уходит в минус', 'Any problem'];
    const objProblemReasons = {
      ...game,
      reasons,
    };
    problemGames.push(objProblemReasons);
    return;
  }

  const isDuplicate = formattedGames.some((itemDuplicate) => {
    if (itemDuplicate.name.toLowerCase() == newGameFormat.name.toLowerCase()) {
      return true;
    }
  });

  if (isDuplicate) {
    const reasons = ['Дубликат'];
    const objProblemReasons = {
      ...game,
      reasons,
    };
    problemGames.push(objProblemReasons);
  } else {
    formattedGames.push(newGameFormat);
  }
});

console.log(formattedGames, problemGames);

console.log(`============== Большая практическая задача. Задача №2.1`);

function infoProblemGame(problemGames) {
  const stringCauseProblem = problemGames.reduce((acc, game) => {
    const causeProblem = game.reasons.join(', ');

    acc += `Игра ${game.name.trim()} имеет проблемы с данными: ${causeProblem}.\n`;

    return acc;
  }, '');

  return stringCauseProblem;
}

const stringMessageProblemGame = infoProblemGame(problemGames);
console.error(stringMessageProblemGame);

console.log(`============== Большая практическая задача. Задача №3`);
// 3. Формируем список жанров (Ключ - название жанра. Значение - id игры)

const genres = formattedGames.reduce((acc, item) => {
  item.hashTags.forEach((tag) => {
    // console.log(tag);
    if (tag in acc) {
      acc[tag].push(item.id);
    } else {
      acc[tag] = [item.id];
    }
  });

  return acc;
}, {});

console.log(genres);

console.log(`============== Большая практическая задача. Задача №4`);
// Отобразить визуально на странице карточки отформатированных игр

const divContainer = document.createElement('div');
divContainer.classList = 'container';

formattedGames.forEach((game) => {
  const cartGame = document.createElement('div');
  cartGame.classList = 'cart-game';

  const title = document.createElement('p');
  title.classList = 'title';
  const description = document.createElement('span');
  description.innerHTML = game.description;
  description.classList = 'desc';
  const link = document.createElement('a');
  link.innerText = game.name;
  link.href = game.link ? game.link : '#';

  const price = document.createElement('span');
  price.classList = 'price';
  price.innerText = `Цена: ${game.finalPrice}`;

  const category = document.createElement('span');
  category.classList = 'category-game';
  category.innerText =
    game.hashTags.length !== 0
      ? `Категория игры: ${game.hashTags.join(', ')}`
      : '';

  divContainer.append(cartGame);
  cartGame.append(title, description, price, category);
  title.append(link);
});

document.body.append(divContainer);
