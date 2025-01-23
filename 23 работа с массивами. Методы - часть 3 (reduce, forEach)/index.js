'use script';

console.log(`============== Метод .reduce()`);

const test = ['Апельсин', 'Банан', 'Персик'];

const result1 = test.reduce((acc, item) => {
  acc[`name-${item}`] = item;
  return acc;
}, {});

console.log(result1);

console.log(`==============`);

const result2 = test.reduce((acc, item) => {
  acc += item + ' ';
  return acc;
}, '');
console.log(result2);

console.log(`==============`);

const test1 = [1, 2, 3, 4, 5];

const result3 = test1.reduce((acc, item) => {
  acc += Number(item);
  return acc;
}, 0);
console.log(result3);

console.log(`==============`);

const test2 = [1, 2, 3, 4, 5];

const result4 = test2.reduce((acc, item) => {
  acc.push(item.toString());
  return acc;
}, []);
console.log(result4);

const result2Array = new Array();
test2.forEach((number) => {
  result2Array.push(number.toString());
});
console.log(result2Array);

console.log(`==============`);
console.log(`==============`);

console.log(`============== Практическая задача №1`);

// flat()
// concat()
// Написать аналог методов flat() и concat() через forEach(); через reduce()
const test3 = [['Апельсин'], ['Банан'], ['Персик']];

console.log(`============== Реализация через forEach()`);
let arrayTest3ForEach = [];

test3.forEach((el) => {
  arrayTest3ForEach.push(el[0]);
});
console.log(arrayTest3ForEach);

console.log(`============== Реализация через reduce()`);

const arrayTest3Reduce = test3.reduce((acc, array) => {
  acc.push(array[0]);
  return acc;
}, []);
console.log(arrayTest3Reduce);

const arrayTest4ReduceConcat = test3.reduce((acc, array) => {
  acc += ' ' + array[0];
  return acc;
}, '');
console.log(arrayTest4ReduceConcat);

console.log(`============== Практическая задача №2`);

const goodProducts = ['Салат', 'Вода', 'Шоколад', 'Булка'];

const test4 = [
  {
    title: 'Сникерс',
    composition: ['Шоколад', 'Сахар', 'Нуга', 'Что-то ещё'],
  },
  {
    title: 'Бургер',
    composition: ['Булка', 'Котлета', 'Салат', 'Другие овощи'],
  },
  {
    title: 'Липтон',
    composition: ['Вода', 'Сахар', 'Сок лимона', 'Щепотка мании'],
  },
];

console.log(`============== Реализация через forEach()`);

let test4ResultForForEach = new Array();

test4.forEach((product) => {
  const composition = new Array();

  product.composition.forEach((item) => {
    composition.push({
      name: item,
      good: goodProducts.includes(item),
    });
  });

  test4ResultForForEach.push({
    title: product.title,
    composition: composition,
  });
});

console.log(test4ResultForForEach);

console.log(`============== Реализация через reduce()`);

const test4ResultForReduce = test4.reduce((acc, product) => {
  const composition = product.composition.reduce((acc2, item) => {
    acc2.push({
      name: item,
      good: goodProducts.includes(item),
    });

    return acc2;
  }, []);

  acc.push({
    title: product.title,
    composition: composition,
  });

  return acc;
}, []);

console.log(test4ResultForReduce);

console.log(`==============`);
console.log(`==============`);
console.log(`==============`);
console.log(`============== ДЗ`);
console.log(`============== Задача №1`);

const countries = [
  {
    country: 'Гана',
    weather: '19',
    warm: true,
    cities: ['Аккра', 'Тамале', 'Кумаси'],
  },
  {
    country: 'Гренландия',
    weather: 20,
    warm: false,
    cities: ['Нуук', 'Какорток'],
  },
  {
    country: 'Мали',
    weather: '25',
    warm: true,
    cities: ['Мопти', 'Бамако', 'Джене'],
  },
  {
    country: 'Дания',
    weather: 5,
    warm: false,
    cities: ['Копенгаген'],
  },
];

console.log(`============== через forEach()`);

const dzResultArrayForEach = new Array();

countries.forEach((el) => {
  let valTemp = null;
  switch (el.warm) {
    case true: {
      valTemp = '+';
      break;
    }
    case false: {
      valTemp = '-';
      break;
    }
  }

  dzResultArrayForEach.push(
    `В стране ${el.country} ${valTemp}${
      el.weather
    } градусов. В состав входят следующие города: ${el.cities.join(', ')}.`
  );
});

console.log(dzResultArrayForEach);

console.log(`============== через reduce()`);

const dzResultArrayReduce = countries.reduce((acc, country) => {
  const valTemp = country.warm ? '+' : '-';

  acc.push(
    `В стране ${country.country} ${valTemp}${
      country.weather
    } градусов. В состав входят страны: ${country.cities.join(', ')}.`
  );

  return acc;
}, []);

console.log(dzResultArrayReduce);

console.log(`============== Задача №2`);
console.log(
  `============== через reduce() - получение самой жаркой/холодной стран`
);

function topCountry(countries) {
  const topWarmAndCouldCountries = countries.reduce(
    (acc, item) => {
      console.log(item);

      if (item.warm && item.weather > acc.hasHotTemp) {
        acc.hasHotTemp = Number(item.weather);
        acc.hasHotCountry = item.country;
      }

      if (!item.warm && item.weather < acc.hasHotTemp) {
        acc.hasColdTemp = Number(item.weather);
        acc.hasColdCountry = item.country;
      }

      return acc;
    },
    {
      hasHotTemp: 0,
      hasHotCountry: '',
      hasColdTemp: 0,
      hasColdCountry: '',
    }
  );
  console.log(topWarmAndCouldCountries);
  return `
      Вывод: Самой горячей страной из списка является: ${topWarmAndCouldCountries.hasHotCountry}.
      Вывод: Самой холодной страной из списка является: ${topWarmAndCouldCountries.hasColdCountry}.
      `;
}

const res = topCountry(countries);
console.log(res);

console.log(`============== Задача №3`);
console.log(
  `============== Дополнительное задание: посчитать количество городов`
);

const countries2 = [
  {
    country: 'Гана',
    weather: 19,
    warm: true,
    cities: ['Аккра', 'Тамале', 'Кумаси'],
  },
  {
    country: 'Гренландия',
    weather: 20,
    warm: false,
    cities: ['Нуук', 'Какорток'],
  },
  {
    country: 'Мали',
    weather: 25,
    warm: true,
    cities: ['Мопти', 'Бамако', 'Джене'],
  },
  {
    country: 'Дания',
    weather: 5,
    warm: false,
    cities: ['Копенгаген'],
  },
];

const countCities = function (countries) {
  const countCity = countries.reduce((acc, el) => {
    acc.push({
      country: el.country,
      towns: el.cities.length,
    });

    return acc;
  }, []);

  return countCity;
};

console.log(countCities(countries2));
