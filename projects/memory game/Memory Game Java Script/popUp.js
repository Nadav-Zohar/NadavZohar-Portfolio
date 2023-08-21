// Adding an event listener to the submitBtn element
submitBtn.addEventListener("click", () => {
    // Check if the player names and the selected value are filled in (not empty)
    if (player1Name.value && player2Name.value && select.value) {
        // If all three fields are filled, perform the following actions:

        // Set the text content of player1Elem to the value entered in player1Name input
        player1Elem.textContent = player1Name.value;

        // Set the text content of player2Elem to the value entered in player2Name input
        player2Elem.textContent = player2Name.value;

        // Hide the popupWrapper (presumably a pop-up form or modal)
        popupWrapper.style.display = "none";

        // Start the game timer (startTimer() function not provided in this code)
        startTimer();

        // Create the game board with cards based on the selected value (createBoard() function not provided in this code)
        createBoard();
    }
});

// Function to handle form submissions
function handleSubmit(event) {
    // Prevent the default form submission behavior (prevents the page from reloading)
    event.preventDefault();
}
