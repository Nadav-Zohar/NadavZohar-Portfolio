function endGame() {
    // Create new elements for displaying the end game message and buttons
    const message = document.createElement("div");
    const resetBtn = document.createElement("button");
    const playAgainBtn = document.createElement("button");

    // Add classes to the created elements for styling
    message.classList.add("endGameMessage");
    resetBtn.classList.add("button-3");
    playAgainBtn.classList.add("button-3");

    // Set the display style of the message element to "flex" to align its contents
    message.style.display = "flex";

    // Add click event listeners to the reset and play again buttons
    resetBtn.addEventListener("click", () => {
        // Reload the page to reset the game
        location.reload();
    });
    playAgainBtn.addEventListener("click", () => {
        // Restart the game by performing the following actions:
        debugger; // Debugger statement to pause the code and allow debugging if needed

        // Get all the hidden cards from the board and remove them
        const cardsArray = Array.from(board.querySelectorAll("div.hidden"));
        cardsArray.forEach(card => {
            card.parentNode.removeChild(card);
        });

        // Clear the timer interval and start the timer again
        clearInterval(timerInterval);
        startTimer();

        // Create a new board with cards for a fresh game
        createBoard();

        // Reset the displayed scores for both players to zero
        tablePlayer1Corr.textContent = "0";
        tablePlayer2Corr.textContent = "0";

        // Reset the internal variables for player scores
        player1Corr = 0;
        player2Corr = 0;

        // Hide the end game message element
        message.style.display = "none";
    });

    // Set the text content for the reset and play again buttons
    resetBtn.textContent = `Reset The Game`;
    playAgainBtn.textContent = `Play Again`;

    // Set the message content to display the winner of the game (presumably determined elsewhere in the code)
    message.innerHTML = `${winner} Won!`;

    // Append the elements to the document body and inside the message element
    document.body.appendChild(message);
    message.appendChild(resetBtn);
    message.appendChild(playAgainBtn);
}
