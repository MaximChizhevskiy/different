// CRUD операции (Create, Read, Update, Delete) имумутабельно.

// Работаем с массивом объектов users
const users = [
  {
    id: 1,
    userName: "Alla",
    age: 22,
    address: {
      country: "KZ",
      city: "Almaty"
    }
  },
  {
    id: 2,
    userName: "Boris",
    age: 29,
    address: {
      country: "KZ",
      city: "Almaty"
    }
  },
  {
    id: 3,
    userName: "Petya",
    age: 36,
    address: {
      country: "KZ",
      city: "Almaty"
    }
  }
]

console.log(users)

// Добавим пользователя newUser
const newUser = {
  id: 4,
    userName: "Vasya",
    age: 34
}

const addUser = [...users, newUser] 
console.log(addUser)

// Удалим пользователя "Boris" по id
const deleteUser = users.filter(u => u.id !== 2)
console.log(deleteUser)

// Изменим возраст пользователя "Anna" по id
const updateAge = users.map(u => u.id === 1 ? {...u, age : 23} : u)
console.log(updateAge)

// Изменим город пользователя "Petya" по id
const updateAddress = users.map(u => u.id === 3 ? {...u, address: {...u.address, city: "Astana"}} : u)
console.log(updateAddress)
