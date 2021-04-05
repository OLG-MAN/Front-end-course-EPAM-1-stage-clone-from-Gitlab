// Task 1
let isEqualfunc = (a, b) => Object.is(a, b)

// Task 2
let numberToString = (num) => num + ''

// Task 3
let storeNames = (...string) => [string]

// Task 4
let getDivision = (a, b) => a > b ? a / b : b / a

// Task 5
function negativeCount(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter++;
        }
    }
    return counter;
}

// Task 6
function lettterCount(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
            counter++;
        }
    }
    return counter;
}
//or
let letterCount = (str, letter) => str.split(letter).length - 1

// Task 7

let countPoints = (arr) => {
    const winPts = 3
    const getPoints = (x, y) => x > y && winPts || x === y && 1 || x < y && 0;
    return arr.map(i => getPoints(+i.split(':')[0], +i.split(':')[1]))
        .reduce((sum, curr) => sum + curr, 0);
}