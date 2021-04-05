const startBtn = document.getElementById('startGame')
const questionsContaier = document.getElementById('skip')
const skipBtn = document.getElementById('question-block')
const questionGame = document.getElementById('question-game')
const answerGame = document.getElementById('answers-game')
const counter = document.getElementById('counter')
const answer0 = document.getElementById('0')
const answer1 = document.getElementById('1')
const answer2 = document.getElementById('2')
const answer3 = document.getElementById('3')
const endGame = document.getElementById('end-game')
const winGame = document.getElementById('win-game')

let totalPrize = document.getElementById('total-prize')
let roundPrize = document.getElementById('round-prize')
let endPrize = document.getElementById('end-prize')
let winPrize = document.getElementById('win-prize')

let totalPrizeVal = 0
let roundPrizeVal = 100
let endPrizeVal = 0
let winPrizeVal = 0

let shuffleQuestions = window.questions.sort(() => Math.random() - 0.5)
let currentQuestionIndex = 0

startBtn.addEventListener('click', startGame)

function startGame() {
    shuffleQuestions = window.questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionsContaier.classList.remove('hide')
    skipBtn.classList.remove('hide')
    answerGame.classList.remove('hide')
    counter.classList.remove('hide')
    endGame.classList.add('hide')
    winGame.classList.add('hide')
    checkWin()
    showQuestion()
}

function showQuestion() {
    let question = shuffleQuestions[currentQuestionIndex]
    questionGame.innerHTML = question.question;
    answer0.innerHTML = question.content[0]
    answer1.innerHTML = question.content[1]
    answer2.innerHTML = question.content[2]
    answer3.innerHTML = question.content[3]
    roundPrize.innerHTML = roundPrizeVal
    totalPrize.innerHTML = totalPrizeVal
    endPrize.innerHTML = endPrizeVal
    winPrize.innerHTML = winPrizeVal
    console.log(question.correct)
}

function checkAnswer(answer) {
    if (answer === window.questions[currentQuestionIndex].correct) {
        console.log('yes')
        totalPrizeVal = totalPrizeVal + roundPrizeVal
        endPrizeVal = totalPrizeVal
        winPrizeVal = totalPrizeVal
        roundPrizeVal = roundPrizeVal * 2
        startGame() 
    } else {
        console.log('no')
        endPrizeVal = totalPrizeVal
        totalPrizeVal = 0
        roundPrizeVal = 100
        endGame.classList.remove('hide')
        questionsContaier.classList.add('hide')
        skipBtn.classList.add('hide')
        answerGame.classList.add('hide')
        counter.classList.add('hide')
    } 
}

function checkWin() {
    if (totalPrizeVal > 1000000) {
        console.log('WIN')
        winPrizeVal = totalPrizeVal
        totalPrizeVal = 0
        roundPrizeVal = 100
        winGame.classList.remove('hide')
        questionsContaier.classList.add('hide')
        skipBtn.classList.add('hide')
        answerGame.classList.add('hide')
        counter.classList.add('hide')
    }
}