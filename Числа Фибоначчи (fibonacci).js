// 1 вариант

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)){
        return "";
    }
let result = "";
let first = 0;
let second = 1;

for (let i = 0; i < num; i++){
    if (i + 1 === num) {
        result += `${first}`;
    } else {
        result += `${first} `
    }
    
    let third = first + second;
    first = second;
    second = third;
}
return result;

}

// 2 вариант

function fib(count) {
        if (typeof (count) !== 'number' || count <= 0 || count % 1 !== 0) {
            return '';
        }
        const arrNumbers = [0];
        for (let i = 1; i < count; i++) {
            if (i === 1){
                arrNumbers.push(1);
            } else {
                arrNumbers.push(arrNumbers[i-1] + arrNumbers[i-2]);
            }            
        }
        return arrNumbers.join(' ');
    }
