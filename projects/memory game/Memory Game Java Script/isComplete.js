function checkComplete() {
    // Select all cards on the board that are not hidden (i.e., still visible and not yet matched)
    const cards = board.querySelectorAll("div:not(.hidden)");

    // If there are no cards left on the board (all cards are matched and hidden)
    if (!cards.length) {
        // Trigger confetti effect using the "confetti" library (assumed to be loaded in the code)
        confetti({
            particleCount: 100,
            spread: 70,
            decay: 0.9,
            origin: { y: 0.6 }
        });

        // Determine the winner of the game (presumably implemented in the "whoWon()" function)
        whoWon();

        // Call the "endGame()" function (not provided in this code) to display the end game message and options
        endGame();
    }
}
