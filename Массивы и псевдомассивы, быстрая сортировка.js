// Создаём массив
const arr = [1, 2, 3, 6, 8];

// Переборы массива цикл for
for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
// Переборы массива цикл for of
for (let value of arr) {
  console.log(value);
}

// Переборы массива цикл forEach();
arr.forEach(function(item, i, arr){
console.log(`${i}: ${item} внутри массива ${arr}`);

})

// Пример сортировки строки полученной от пользователя
const str = prompt("", "");
const products = str.split(", ");
console.log(products);


// Быстрая сортировка
const newArr = [5, 3, 7, 2]; 
newArr.sort(compareNum);
console.log;

function compareNum(a, b) {
  return a - b;
}