var startBtn = document.querySelector(".start-button")
var wordBlanksEl = document.querySelector(".word-blanks")
var scoreEl = document.querySelector(".score")

var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]
var word
var guessedCharacters = []
var score = 0

// timeLeft variable

function checkWord() {
    var joinWord = wordBlanksEl.textContent.split(" ").join("")
    if (word === joinWord) {
        score++
        scoreEl.textContent = score
        startRound()
    }
}

function handleKeydown(event) {
    if (validChars.includes(event.key)) {
        guessedCharacters.push(event.key)
        renderCharacters()
    }
}

function renderCharacters() {
    var str = ""   
    for (var i = 0; i < word.length; i++) {
        var letter = word[i]
        if (guessedCharacters.includes(letter)) {
            str += letter + " "
        } else {
           str += "_ " 
        }
    }
    wordBlanksEl.textContent = str.trim()
    checkWord()
}

function startRound() {
    guessedCharacters = []
    var randomIndex = Math.floor(Math.random() * words.length)
    word = words[randomIndex]
    renderCharacters()
}

startBtn.addEventListener("click", startRound)

document.addEventListener("keydown", handleKeydown)