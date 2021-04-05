// Task 1

function convertTypes(...array) {
    const resultArray = []

    for (let i = 0; i < array.length; i++) {
        let element = typeof array[i] === 'number' ? array[i] + '' : +array[i]
        resultArray.push(element)
    }
    return resultArray
}

// Task 2

function forEachElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

// Task 3

function mapArr(array, modFunc) {
    const initArray = []
    const resultArray = []

    forEachElement(array, item => initArray.push(+item))
    forEachElement(initArray, item => resultArray.push(modFunc(item)))

    return resultArray
}

// Task 4

function filterArr(arr, funct) {
    let newArr = [];
    forEachElement(arr, function (el) {
        if (funct(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}

//Task 5

function getValPosition(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i + 1;
        }
    }
    return false;
}

// Task 6 

function reverseString(str) {
    let newString = ''

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}

//Task 7 

function twoNumbers(lowNum, highNum) {
    let list = []
    for (let i = lowNum; i <= highNum; i++) {
        list.push(i)
    }
}

//Task 8 

function getArrayOfKeys(array, key) {
    let result = [];
    forEachElement(array, function (el) {
        result.push(el[key]);
    });
    return result;
}

//Task 9 

function getTotalWeight(arr) {
    let result = null;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].weight;
    }
    return result;
}


//Task 10 

function getPastDay(date, dayNum) {
    const resultDate = date
    resultDate.setDate(resultDate.getDate() - dayNum)
}

//Task 11

function formatDate(date) {
    const YEAR = date.getFullYear()
    const MONTH = date.getMonth() >= 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    const DATE = date.getDate() >= 9 ? date.getDate() : '0' + date.getDate()
    const HOURS = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
    const MINUTES = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()

    const result = `${YEAR}/${MONTH}/${DATE} ${HOURS}:${MINUTES}`

    return result
}