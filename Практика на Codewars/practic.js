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
