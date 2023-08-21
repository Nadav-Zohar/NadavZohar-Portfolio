// Global variables
let playerFlag = true; // A boolean variable used to keep track of the active player (true for Player 1, false for Player 2)
let player1Corr = 0; // A variable to store the number of correct matches made by Player 1
let player2Corr = 0; // A variable to store the number of correct matches made by Player 2
let player1Win = 0; // A variable to store the total wins of Player 1
let player2Win = 0; // A variable to store the total wins of Player 2
let winner = ""; // A variable to store the name of the overall winner (Player with more correct matches)

// Function to update the displayed player scores
function printTries() {
    // Update the innerHTML of tablePlayer1Corr and tablePlayer2Corr elements with player scores
    tablePlayer1Corr.innerHTML = player1Corr;
    tablePlayer2Corr.innerHTML = player2Corr;
}

// Function to determine the overall winner
function whoWon() {
    if (player1Corr > player2Corr) {
        // If Player 1 has more correct matches than Player 2
        player1Win++; // Increment Player 1's total wins
        tablePlayer1Win.innerHTML = player1Win; // Update the displayed total wins of Player 1
        winner = player1Elem.textContent; // Set the winner variable to the name of Player 1
    } else {
        // If Player 2 has more correct matches than or equal to Player 1
        player2Win++; // Increment Player 2's total wins
        tablePlayer2Win.innerHTML = player2Win; // Update the displayed total wins of Player 2
        winner = player2Elem.textContent; // Set the winner variable to the name of Player 2
    }
}
