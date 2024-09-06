
function arrayMap(arr, callback) {
    const resArr = []

    /*for (let i= 0; i < arr.length; i++) {
        resArr.push(callback(arr[i]))
    }*/

    arr.forEach(el => {
        return resArr.push(callback(el))
    })
    return resArr
}

let numbers = [1, 2, 3, 4, 5]
let multiply = arrayMap(numbers, (numbersI) => numbersI*10)

console.log(multiply)