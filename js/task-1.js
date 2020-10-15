// создает стрелочную функцию для выполнения сложения елемента массива и его индекса
const addIndex = (element, index) => element + index;

// создает стрелочную функцию для выполнения вычетания индекса от значения его елемента
const subIndex = (element, index) => element - index;

// создает функцию для перебора массива и вызова callback финкци для выполнения дейстивия вычетания или сложения
const mapArray = function (array, cb) {
  const numbers = new Array(array.length);
  console.log(numbers)
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    numbers[i] = cb(element, index);
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]
