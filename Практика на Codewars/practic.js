'use script';

console.log(`============== Задача №1`);
const listRating = {
  terrible: 0,
  poor: 5,
  good: 10,
  great: 15,
  excellent: 20,
};

function calculateTip(amount, rating) {
  let finalDiscount = 'Rating not recognised';
  for (let ratingName in listRating) {
    const valRatingList = listRating[ratingName];

    if (rating.toLowerCase() === ratingName) {
      finalDiscount = Math.ceil((valRatingList / 100) * amount);
    }
  }

  return finalDiscount;
}

console.log(calculateTip(20, 'Excellent'));
console.log(calculateTip(26.95, 'GoOd'));
/* 
Test.assertEquals(calculateTip(20, "Excellent"), 4);
Test.assertEquals(calculateTip(26.95, "good"), 3);
*/

console.log(`============== Задача №2`);

const ArrowFunc = function (arr) {
  return arr.map((el) => String.fromCharCode(el)).join('');

  return newArr;

  // ТАК ЖЕ ПРАВИЛЬНОЕ РЕШЕНИЕ:
  //   return arr.map((el) => String.fromCharCode(el)).join('');

  console.log(...arr);
  return String.fromCharCode(...arr);
};

console.log(ArrowFunc([84, 101, 115, 116]));
console.log(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]));

console.log(`============== Задача №3`);

const describeAge = (age) => {
  let m = `You're a(n) `;
  return age <= 12
    ? `${m}kid`
    : age >= 13 && age <= 17
    ? `${m}teenager`
    : age >= 18 && age <= 64
    ? `${m}adult`
    : `${m}elderly`;

  // ТАК ЖЕ ПРАВИЛЬНОЕ РЕШЕНИЕ:
  return (
    "You're a(n) " +
    (age < 13 ? 'kid' : age < 18 ? 'teenager' : age < 65 ? 'adult' : 'elderly')
  );

  //// Переписать на тернарный оператор условие
  //  if (age <= 12) {
  //    return "You're a(n) kid";
  //  } else if (age >= 13 && age <= 17) {
  //    return "You're a(n) teenager";
  //  } else if (age >= 18 && age <= 64) {
  //    return "You're a(n) adult";
  //  } else {
  //    return "You're a(n) elderly";
  //  }
};

console.log(describeAge(9));
console.log(describeAge(10));
console.log(describeAge(11));
console.log(describeAge(12));
console.log(describeAge(13));
console.log(describeAge(14));
console.log(describeAge(15));
console.log(describeAge(16));
console.log(describeAge(17));
console.log(describeAge(18));
console.log(describeAge(19));
console.log(describeAge(63));
console.log(describeAge(64));
console.log(describeAge(65));
console.log(describeAge(66));
console.log(describeAge(100));

console.log(`============== Задача №4`);

function animal(obj) {
  const { name, legs, color } = obj;
  console.log(name, legs, color);
  return `This ${color} ${name} has ${legs} legs`;
}

// const animal = {
//   { name: "dog", legs: 4, color: "white" }
// }

console.log(animal({ name: 'dog', legs: 4, color: 'white' }));

/**
 *   it("white dog with 4 legs", () => {
    assert.strictEqual(animal({ name: "dog", legs: 4, color: "white" }), "This white dog has 4 legs.");
  });

  it("red cock with 2 legs", () => {
    assert.strictEqual(animal({ name: "cock", legs: 2, color: "red" }), "This red cock has 2 legs.");
  });

  it("gray rabbit with 4 legs", () => {
    assert.strictEqual(animal({ name: "rabbit", legs: 4, color: "gray" }), "This gray rabbit has 4 legs.");
  });
 */

console.log(`============== Задача №5`);

function multiTable(number) {
  let rows = [];
  for (let i = 1; i <= 10; i++) {
    rows.push(`${i} * ${number} = ${i * number}`);
  }

  return rows.join('\n');
}

console.log(multiTable(5));

console.log(`============== Задача №6`);

function isToday(date) {
  console.log(date);

  const today = new Date();

  return today.toDateString() === date.toDateString() ? true : false;
}

console.log(isToday(new Date()));

console.log(`============== Задача №7`);

function shortenToDate(longDate) {
  console.log(longDate);
  return longDate.split(', ')[0];
}

console.log(shortenToDate('Tuesday January 29, 10pm'));

console.log(
  `============== Задача №8. Узнать разницу в днях и вернуть true ЕСЛИ дата больше чем значение цикла из параметра cycleLength`
);

function periodIsLate(last, today, cycleLength) {
  console.log(last);
  console.log(today);
  console.log(cycleLength);

  const msLast = Date.parse(last);
  const msToDay = Date.parse(today);
  console.log((msToDay - msLast) / (1000 * 60 * 60 * 24)); // Узнаём разницу между текущей (today) и начальной (last) датой В КОЛИЧЕСТВЕ ДНЕЙ
  const resultPeriod =
    (msToDay - msLast) / (1000 * 60 * 60 * 24) > cycleLength ? true : false;

  return resultPeriod;

  // Также корректное решение:
  // return (today-last)/86400000>cycleLength
  /**
   * При вычитание дат объекта Date() - получаем разницу в миллисекундах.
   * 86400000 - значение показывает сколько миллисекунд в однмо дней (рассчитывается по формуле 1000 * 60 * 60 * 24)
   * Деление двух значений возвращает общее количество дней от КОНЕЧНОЙ до НАЧАЛЬНОЙ даты.
   */
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));

console.log(
  `============== Задача №9. Поиск уникального значения внутри массива данных любых типов`
);

function findUniq(arr) {
  resultNotUniqNumber = arr.find((el, index, array) => {
    return array.indexOf(el) == array.lastIndexOf(el);
  });

  return resultNotUniqNumber;
}

findUniq([1, 0, 0]);
findUniq([0, 1, 0]);
findUniq([0, 0, 1]);
console.log(findUniq([1, 1, 1, 2, 1, 1]));
findUniq([1, 1, 2, 1, 1]);
findUniq([3, 10, 3, 3, 3]);
findUniq(['php', 'php', 'PhP', 'php']);
console.log(findUniq(['php', 'php', 1, 'php']));

console.log(`============== Задача №10.`);

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

function func1() {
  return console.log('True');
}

function func2() {
  return console.log('false');
}

_if(true, func1, func2);

console.log(`============== Задача №11.`);

function arrAdder(arr) {
  let resultString = '';

  for (let i = 0; i < arr[0].length; i++) {
    // console.log(arr[i]);
    for (let p = 0; p < arr.length; p++) {
      // console.log(p, i);
      resultString += arr[p][i];
    }
    resultString += ' ';
  }
  // return resultString.slice(0, resultString.length - 1);
  return resultString.trim();
}

console.log(
  arrAdder([
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', ''],
  ])
);

console.log(
  arrAdder([
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', ''],
  ])
);

console.log(`============== Задача №11.`);

function getMinMax(arr) {
  console.log(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return new Array(min, max);
}

// ТАКЖЕ ПРАВИЛЬНЫЙ ВАРИАНТ РЕШЕНИЯ:
/**
 function getMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
 }
 */

console.log(getMinMax([2, 1, 3, 5, '-12', false, 55]));
