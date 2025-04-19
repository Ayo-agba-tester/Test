function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

const numbers = [5, -3, 0, 12, -9, 7];
const positiveNumbers = filterNegativeNumbers(numbers);

console.log(positiveNumbers)
