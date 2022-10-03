//создали объект
const options = {
name: 'test',
width: 1024,
height: 1024,
colors: {
  border:'black',
  bg: 'red'
},
makeTest: function() {
console.log("Test");
}
};

options.makeTest();

console.log(Object.keys(options)); // Получим массив со всеми ключами
console.log(Object.keys(options).length) // количество ключей в массиве

const {border, bg}  = options.colors; // Деструктурирование
console.log(border);

//Перебор объекта и количество ключей. Долгий вариант.
let counter = 0;
for (let key in options){
  if (typeof(options[key]) === 'object'){
    for(let i in options[key]){
      console.log(`Свойство ${key} имеет значение ${options[key][i]}`)
      counter++;
    } 

  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`)
    counter++;
  }
}
console.log(counter);
