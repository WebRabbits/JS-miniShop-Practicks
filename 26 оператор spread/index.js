'use script';

console.log(`============== Оператор Spread`);

const user = {
  name: 'alex',
  age: 21.22,
  car: {
    model: 'Nissan',
    color: 'red',
  },
};

const admin = {
  name: user.name,
  age: user.age,
  hasCar: user.hasCar,
  isAdmin: true,
};

const moder = {
  name: user.name,
  age: user.age,
  hasCar: user.hasCar,
  isAdmin: false,
};

console.log(user);
console.log(admin);

console.log(`============== Используем оператор Spread c Объектами`);

const user2 = {
  surname: 'black',
};

const admin2 = {
  ...user,
  ...user2,
  car: {
    // Для того, чтобы изменить свойство вложенного объекта в другой объект, требуется определить данный вложенный объект, внутри него произвести Spread оператор для вложенного объекта из родительского объекта "user{}", и только потом переопределить его свойство (например цвет машины сделать зелёной)
    // ПРИ ЭТОМ, если внутри свойства "car", не произвести Spread оператор над самим свойство user.car родительского объекта "user" - то марка машины не будет определена у нового объекта "admin2"
    ...user.car,
    color: 'green',
  },
  isAdmin: true,
  isFull: true,
};

console.log(admin2);

console.log(`============== Используем оператор Spread c Массивами`);

const cars = ['Nissan', 'KIA', 'Porshe'];
const favourite = ['food', ...cars, 'code'];

console.log(cars);
console.log(favourite);
