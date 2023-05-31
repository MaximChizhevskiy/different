const todolistId_1 = "key1"
const todolistId_2 = "key2"

const todolists = [
    {
        id: todolistId_1,
        title: "What to learn",
        tasks: [
            {name: "Html", isDone: true},
            {name: "Js", isDone: false}
        ]
    },
    {
        id: todolistId_2,
        title: "What to buy",
        tasks: [
            {name: "Laptop", isDone: true},
            {name: "PS5", isDone: false}
        ]
    }
]

// Для быстрого доступа к массиву тасок внутри массива тудулистов,
// вынесем таски в отдельную структуру

const tasks = {
    [todolistId_1]: [
        {name: "Html", isDone: true},
        {name: "Js", isDone: false}
    ],
    [todolistId_2]: [
        {name: "Laptop", isDone: true},
        {name: "PS5", isDone: false}
    ]
}

console.log(tasks[todolistId_2]) // Быстрый доступ к таскам по id тудулиста
console.log(Object.keys(tasks)) // ключи тасок key1 и key2
console.log(tasks[todolistId_1].filter(t => t.isDone !== true)) // показать незавершённые таски