let expression = prompt('Enter your operation, for example 2+2')

let match = expression.match(/^(-?\d+)([-+*/])(-?\d+)$/)

if (match === null) {
    alert('invalid expression');
}

let num1 = match[1]
let op = match[2]
let num2 = match[3]

if (isNaN(num1 / num2) || num1 / num2 === Infinity || num1 / num2 === -Infinity) {
    alert('invalid expression')
} else {
    switch (op) {
        case '+':
            alert(Number(num1) + Number(num2))
            break
        case '-':
            alert(Number(num1) - Number(num2))
            break
        case '*':
            alert(Number(num1) * Number(num2))
            break
        case '/':
            alert(Number(num1) / Number(num2))
            break
        default:
            alert('Not a correct operation')
    }
}