/* START TASK 1: Your code goes here */
const table = document.querySelector('.table')

table.addEventListener('click', function (event) {
    const target = event.target
    const row = target.parentNode
    const firstCell = row.firstElementChild
    const sCell = 'Special Cell'

    if (target.textContent === sCell) {
        const cells = table.querySelectorAll('td')
        cellToggle(cells, 'green')
    } else if (target === firstCell) {
        const cells = row.querySelectorAll('td')
        cellToggle(cells, 'blue')
    } else {
        target.classList.toggle('yellow')
    }
})

function cellToggle(arr, color) {
    arr.forEach(element => {
        element.classList.toggle(color)
    });
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const input = document.querySelector('.inputNumber')
const button = document.querySelector('.sendButton')
const notification = document.querySelector('.notification')

input.addEventListener('keyup', typeHandler)
button.addEventListener('click', sendNumber)

function typeHandler() {
    if (isValidNum(this.value)) {
        button.removeAttribute('disabled')
        notification.classList.add('hide')
    } else {
        notification.classList.remove('hide')
        notification.setAttribute('class', 'invalidNotification')
        notification.innerHTML = 'Type number does not<br>follow format +380*******'
        input.setAttribute('class', 'invalidInput')
    }
}

function sendNumber() {
    notification.innerHTML = 'Data was successfully sent'
    notification.setAttribute('class', 'validNotification')
    input.setAttribute('class', 'validInput')
}

function isValidNum(num) {
    return /^\+380[1-9]{2}\d{7}$/g.test(num)
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const field = document.querySelector('.court')
const ball = document.querySelector('.ball')
const winA = document.querySelector('.winB')
const winB = document.querySelector('.winA')
let teamA = document.querySelector('#teamA')
let teamB = document.querySelector('#teamB')
let teamWin = document.querySelector('.teamWin')
let totalScoreA = 0
let totalScoreB = 0

winA.addEventListener('click', teamAWin)
winB.addEventListener('click', teamBWin)

function teamAWin() {
    totalScoreA += 1
    teamWin.textContent = 'team A score!'
    teamWin.classList.remove('hide')
    teamWin.classList.remove('color-blue')
    teamWin.classList.add('color-red')
    teamA.textContent = totalScoreA
    setTimeout(() => {
        teamWin.classList.add('hide')
    }, 3000)
}

function teamBWin() {
    totalScoreB += 1
    teamWin.textContent = 'team B score!'
    teamWin.classList.remove('hide')
    teamWin.classList.remove('color-red')
    teamWin.classList.add('color-blue')
    teamB.textContent = totalScoreB
    setTimeout(() => {
        teamWin.classList.add('hide')
    }, 3000)
}

field.onclick = function (event) {
    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }
    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    }
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}
/* END TASK 3 */