let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);

    if (userGuess === randomNumber){
        lastResult.textContent = 'You Win!';
        lastResult.style.backgoundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'You lose!';
        setGameOver();
    } else {
        lastResult.textContent = 'You Wrong';
        lastResult.style.backgoundColor = 'red'
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Too Low';
        } else {
            lowOrHi.textContent = 'Too high'
        }

    }

    guessCount ++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetgame);
}

function resetgame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; i ++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disable = false;
    guessSubmit.disable = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgoundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}