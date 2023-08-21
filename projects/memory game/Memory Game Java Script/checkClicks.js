function check() {
    // Select all elements with the class "showing" within the board element
    const cards = board.querySelectorAll(".showing");
    
    // Check if two cards are showing (i.e., if there are exactly two cards with the "showing" class)
    if (cards.length == 2) {
        // Get the first and last cards from the selected cards array
        const first = cards[0];
        const last = cards[1];

        // Check if the content (textContent) of the first and last cards is the same (a match)
        if (first.textContent == last.textContent) {
            // If there is a match, wait for 500 milliseconds and then perform the following actions:
            setTimeout(() => {
                // Remove the "showing" class from both cards to hide them from the player
                first.classList.remove("showing");
                last.classList.remove("showing");
                
                // Add the "hidden" class to both cards to visually indicate that they are matched and hidden
                first.classList.add("hidden");
                last.classList.add("hidden");
                
                // Call the checkComplete() function (not provided in this code) to check if the game is completed or not
                
                // Check the playerFlag variable to determine which player's turn it is
                if (playerFlag == true) {
                    // If playerFlag is true, increment player1Corr to count the correct matches for Player 1
                    player1Corr++;
                    // Call the printTries() function (not provided in this code) to update the displayed number of attempts/moves made by the player
                    printTries();
                } else {
                    // If playerFlag is false, increment player2Corr to count the correct matches for Player 2
                    player2Corr++;
                    // Call the printTries() function (not provided in this code) to update the displayed number of attempts/moves made by the player
                    printTries();
                }
            }, 500); // The delay of 500 milliseconds (0.5 seconds) allows the player to see the matching cards briefly
        } else {
            // If there is no match, wait for 1500 milliseconds (1.5 seconds) and then perform the following actions:
            setTimeout(() => {
                // Remove the "showing" class from both cards to hide them from the player
                first.classList.remove("showing");
                last.classList.remove("showing");
                
                // Toggle the playerFlag variable to switch turns between players
                if (playerFlag) {
                    playerFlag = false;
                } else {
                    playerFlag = true;
                }
                
                // Update the visual indication of the current player's turn by adding/removing the "playing" class to the respective player elements
                if (playerFlag) {
                    player2Elem.classList.remove("playing");
                    player1Elem.classList.add("playing");
                } else {
                    player1Elem.classList.remove("playing");
                    player2Elem.classList.add("playing");
                }
                
                // Call the printTries() function (not provided in this code) to update the displayed number of attempts/moves made by the player
                printTries();
            }, 1500); // The delay of 1500 milliseconds (1.5 seconds) allows the player to see the non-matching cards briefly before they are hidden again
        }
    }
}