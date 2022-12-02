// 0 Створити числовий масив та проініціалізувати його (*випадковими числами).
const arrNumbers = [];

for (let i = 0; i < 10; i++) {
  const arrItem = Math.round(Math.random() * 10);
  arrNumbers.push(arrItem);
}

console.dir(arrNumbers);

// 1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
console.log("arrNumbers до:>> ", arrNumbers);
console.log("arrNumbers.pop :>> ", arrNumbers.pop());
console.log("arrNumbers після:>> ", arrNumbers);

console.log(
  "arrNumbers.push :>> ",
  arrNumbers.push(Math.round(Math.random() * 10))
);
console.log("arrNumbers після:>> ", arrNumbers);

console.log("arrNumbers до:>> ", arrNumbers);
const shifted = arrNumbers.shift();
console.log("arrNumbers після:>> ", arrNumbers);

const unshifted = arrNumbers.unshift(Math.round(Math.random() * 10));
console.log("arrNumbers після:>> ", arrNumbers);

// 2 Вивести розмір масиву.
console.log("arrNumbers.length :>> ", arrNumbers.length);

// 3 Зробити копію масиву.

const arrNumbers2 = [...arrNumbers];
console.dir(arrNumbers2);

// // Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли

// 4 Вивести елементи з парними індексами.

function evenIndex(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      console.log("Елемент з парним індексом >>", i);
    }
  }
}
console.log(evenIndex(arrNumbers));

// 5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).

function evenNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log("Парний елемент >>", array[i]);
    }
  }
}
console.log(evenNumbers(arrNumbers));

// 6 Вивести індекси нульових елементів (елемент дорівнює нулю).

function zeroElements(array) {
  let isZeroElementExists = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      isZeroElementExists = true;
      console.log("Нульовий елемент під індексом :>> ", i);
    }
  }
  if (!isZeroElementExists) {
    console.log("Немає нульових елементів");
  }
}
console.log(zeroElements(arrNumbers));

// 7 Підрахувати кількість нульових елементів.
function zeroElementsCount(array) {
  let zeroCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeroCount++;
    }
  }
  console.log("Кількість нульових елементів дорівнюе >>", zeroCount);
}
console.log(zeroElementsCount(arrNumbers));

// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).

// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).

const setArray = [-1, 5, 0, 9, -10];

const getArray = setArray.filter(function (item) {
  return item !== 0;
});
console.log(getArray);

// 9 Отримати новий масив із заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).

const setArray2 = [99, 5, 0, 9, 30];

const getArray2 = setArray2.map((item) => item / 100);
console.log(getArray2);

// 10 Вивести елементи масиву, зведені у куб.

console.log(setArray2.map((item) => Math.pow(item, 3)));

//! 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує.

function find(item) {
  return item ** 2 === 100;
}
console.log(setArray2.findIndex(find));

// 12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами).

console.log(setArray2.every((item) => item % 2 === 0));

// 13 *Перевірити, чи є у масиві бодай один від'ємний елемент.

console.log(setArray2.some((item) => item < 0));
