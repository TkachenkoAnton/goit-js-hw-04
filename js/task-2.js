// создает функцию для проверки елемента на уникальность
const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// создает функцию для проверки елемента на четность
const isEven = (element) => element % 2 === 0;

// создает функию которая добаляет елемнт в массив при значении true callback функции
function filterArray (array, cb) {
  const numbers = [];
  for(let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
      if (cb(element, index, array)) {
    numbers.push(element)
      }
  }
  return numbers;
}

const arr = [1,2,3,4,5,1,2,5];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]
