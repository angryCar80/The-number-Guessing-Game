//declaring The Answer and it's a random number (int) 
const answer = Math.floor(Math.random() * 100) + 1

//declaring the attempt variable and give it a value and in this case it's zero
let attempts = 0;

//declaring the items by the id
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

//checking if the submit button is pressed
submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    //checking if the user guess is not a number or greater then 100 or lower then 1 
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        feedback.textContent = "Please Enter a valid Number"; //Sets feedback text to prompt the user for valid input
        feedback.style.color = 'red'; //seting the text color to red
        return; //exits the function 
    }
    //checking if the user guess is lower then the answer
    else if (userGuess < answer){
        feedback.textContent = `Too low! Try again.`; //Sets feedback text to prompt the user for the low number
        feedback.style.color = 'orange'; //seting the text color to orange
    } 
    else if (userGuess > answer){
        feedback.textContent = `Too high! Try again.`; //Sets feedback text to prompt the user for the hight number
        feedback.style.color = 'orange'; //seting the text color to orange
    }
    // the player wins 
    else{
        feedback.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.` //Sets feedback text to prompt that he wins and shows the attempts
        feedback.style.color = 'green'; //seting the text color to green
    }

    
    guessInput.value = ''; //making sure that the input is a zero
    attempts++; //increasing the attempts by one
}) 
