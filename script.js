// Global variables to store user choice, computer choice, and game result
let userChoice;
let computerChoice;
let result;

// Function to play the game based on the user's choice
function playGame(choice) {
    // Store the user's choice
    userChoice = choice;
    // Generate the computer's choice
    computerChoice = getComputerChoice();
    // Determine the result of the game
    result = getResult(userChoice, computerChoice);
    
    // Hide the choices and display the result
    document.getElementById('images-container').style.display = 'none';
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('result').innerHTML = `You chose ${userChoice}.<br>Computer chose ${computerChoice}.<br>${result}`;
    // Display the reset button
    document.getElementById('resetButton').style.display = 'block';
}

// Function to get the computer's choice
function getComputerChoice() {
    // Array of choices
    const choices = ['rock', 'paper', 'scissors'];
    // Generate a random number to select a choice
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to determine the result of the game
function getResult(player, computer) {
    // Check for tie
    if (player === computer) {
        return "It's a tie!";
    } 
    // Check for user win conditions
    else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } 
    // If not tie or user win, user loses
    else {
        return 'You lose!';
    }
}

// Function to reset the game
function resetGame() {
    // Show the reset button and hide the result
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('resetButton').style.display = 'none';
    // Display the choices
    document.getElementById('images-container').style.display = 'flex';
}

function toggleMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}
