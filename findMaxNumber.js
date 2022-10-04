function findMaxNumber(num1, num2, num3, num4) {
if (typeof(num1) !== 'number' ||
    typeof(num2) !== 'number' ||
    typeof(num3) !== 'number' ||
    typeof(num4) !== 'number'){
        return 0;
    } else {
        return Math.max(num1, num2, num3, num4);
    }
}