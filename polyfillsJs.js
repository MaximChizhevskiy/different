//map-------------------------------------------------------
const numbers = [1, 2, 3, 4, 5]
const multiplyBy10 = numbers.map(el => el*10)

const multiplyBy10Func = (numbersArr, callback) => {
    const newArray = []
    for (let i = 0; i < numbersArr.length; i++) {
        newArray.push(callback(numbersArr[i]))
    }
    return newArray
}

const resultMultiply = multiplyBy10Func(numbers, (num) => num * 10)
console.log(resultMultiply)

//slice--------------------------------------------------------
const fruits = ['apple', 'banana', 'cherry', 'pear', 'orange', 'strawberry']
const resultSlice = fruits.slice(1, 4)

const sliceFunc = (start, end, fruitsArr) => {
    const newArray = []
    for (let i = start; i < end; i++) {
        newArray.push(fruitsArr[i])
    }

    return newArray
}

const resultSliceFunc = sliceFunc(1, 3, fruits)
console.log(resultSliceFunc)

