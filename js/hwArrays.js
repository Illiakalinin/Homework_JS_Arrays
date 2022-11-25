/* 0 Створити числовий масив та проініціалізувати його (*випадковими числами).
1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
2 Вивести розмір масиву.
3 Зробити копію масиву.
*/

// 0
const arrNumbers = [];

for (let i = 0; i < 10; i++) {
  const arrItem = Math.round(Math.random() * 10);
  arrNumbers.push(arrItem);
}

console.dir(arrNumbers);

// 1
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

// 2
console.log("arrNumbers.length :>> ", arrNumbers.length);

// 3
const arrNumbers2 = [...arrNumbers];
console.dir(arrNumbers2);

// if (i % 2 === 0) {
//   console.log("Елемент з парним індексом >>", arrItem);
// }

// if (arrItem % 2 === 0) {
//   console.log("Парний елемент >>", arrItem);
// }
