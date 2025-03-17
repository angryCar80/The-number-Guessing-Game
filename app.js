const randomNumber = Math.floor(Math.random() * 100) + 1

let attempts = 0;
let guess;

const guessInput = document.getElementById('guessInput');
let submitGuess = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        feedback.textContent = "Please Enter a valid Number";
        feedback.style.color = 'red';
        return;
    }
    else if (userGuess < randomNumber){
        feedback.textContent = `Too low! Try again.`;
        feedback.style.color = 'orange';
    } 
    else if (userGuess > randomNumber){
        feedback.textContent = `Too high! Try again.`;
        feedback.style.color = 'orange';
    }
    else{
        feedback.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`
        feedback.style.color = 'green';
    }

    guessInput.value = '';

    attempts++;
}) 