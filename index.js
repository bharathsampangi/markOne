var readlineSync = require('readline-sync')
var chalk = require('chalk')
var score = 0

var questions = [
  {
    question: 'Where do I live?',
    answer: 'Bangalore'
  },
  {
    question: 'My favourite superhero would be?',
    answer: 'Dhruv'
  },
  {
    question: 'Where do I work?',
    answer: 'Microsoft'
  }
]

var highScores = [
  {
    name: 'Tanay',
    score: 3
  },
  {
    name: 'Akash',
    score: 2
  }
]

function welcome() {
  var userName = readlineSync.question('What is your name? ')
  console.log('Welcome ', userName, ' to DO YOU KNOW Tanay?')
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question + ' ')

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("right!"))
    score = score + 1
  }
  else {
    console.log(chalk.red("wrong!"))
  }

  console.log("current score:  ", chalk.red(score))
  console.log("----------")
}

function start() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED:  ", chalk.red(score))
  console.log("Check out the high scores, if you should be there ping me I'll update it")

  for (var j = 0; j < highScores.length; j++) {
    var highScore = highScores[j]
    console.log(highScore.name, '  :  ', chalk.red(highScore.score))
  }
}

function checkHighscore(score) {
  var isHighScore = highScores.find(highScore => {
    return score > highScore.score
  })
  isHighScore && console.log(chalk.green("CONGRATULATIONS!, on your new HIGH Score."), "Please send a screenshot of your score so we can update it")
}

welcome()
start()
showScores()
checkHighscore(score)