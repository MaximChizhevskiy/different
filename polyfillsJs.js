const numbers = [1, 2, 3, 4, 5]
const fruits = ['apple', 'banana', 'cherry', 'pear', 'orange', 'strawberry']

//map-------------------------------------------------------
const resultMap = numbers.map(el => el * 10)

const mapFunc = (numbersArr, callback) => {
    const newArray = []
    for (let i = 0; i < numbersArr.length; i++) {
        newArray.push(callback(numbersArr[i]))
    }
    return newArray
}

const resultMapFunc = mapFunc(numbers, (num) => num * 10)
console.log(resultMapFunc)

//slice--------------------------------------------------------
const resultSlice = fruits.slice(1, 4)
console.log("slice ", resultSlice)
const sliceFunc = (start, end, fruitsArr) => {
    const newArray = []
    for (let i = start; i < end; i++) {
        newArray.push(fruitsArr[i])
    }

    return newArray
}

const resultSliceFunc = sliceFunc(1, 4, fruits)

//splice---------------------------------------------------------
const resultSplice = fruits.splice(1, 2)

const spliceFunc = (start, count, arr, replaceArr) => {
    for (let i = start; i < start + count; i++) {
        arr[i] = replaceArr[i - start]
    }
    return arr
}

const resultSpliceFunc = spliceFunc(1, 2, fruits, ['NEWBanana', 'NEWCherry'])
console.log(resultSpliceFunc)

//reduce
const resultReduce = numbers.reduce((acc, currentValue) => {
    return acc += currentValue
}, 0)

console.log(resultReduce)

const reduceFunc = (numbersArr) => {
    let acc = 0
    for (let i = 0; i < numbersArr.length; i++) {
        acc += numbersArr[i]
    }
    return acc
}

const resultReduceFunc = reduceFunc(numbers)
console.log(resultReduceFunc)

//reduce extra tasks
const fruit1 = ['apple', 'banana', 'cherry', 'apple', 'banana', 'pear', 'orange', 'banana', 'strawberry']

const countOfFruits = fruit1.reduce((acc, currentValue) => {
    if (acc[currentValue]) {
        acc[currentValue] += 1
    } else {
        acc[currentValue] = 1
    }
    return acc
}, {})

console.log(countOfFruits)

const veg = [
    {name: 'apple', prices: 25, kg: 10},
    {name: 'orange', prices: 125, kg: 100},
    {name: 'tomato', prices: 225, kg: 1000},
    {name: 'tomato', prices: 225, kg: 1000},
]

const countOfVegetables = veg.reduce((acc, currentValue) => {
    if (acc[currentValue.name]) {
        acc[currentValue.name] += currentValue.prices * currentValue.kg
    } else {
        acc[currentValue.name] = currentValue.prices * currentValue.kg
    }

    return acc
}, {})

console.log(countOfVegetables)
