function gameOver() {
    // Set the game over flag to true (isGameOver is presumably a global variable)
    isGameOver = true;

    // Create an audio element to play the game over sound
    const gameOverSound = document.createElement("audio");

    // Set the source of the audio file
    gameOverSound.src = "../../../projects/snake/SnakeGame Sound/Country_Blues.ogg";

    // Set the volume of the audio to 40% (0.4)
    gameOverSound.volume = 0.4;

    // Play the game over sound
    gameOverSound.play();

    // Clear the game loop interval (presumably the interval that updates the game)
    clearInterval(interval);

    // Set a delay using setTimeout to show the "GAME OVER" alert after 100 milliseconds
    setTimeout(() => {
        // Show an alert with the message "GAME OVER"
        alert("GAME OVER");

        // Reload the page to start a new game
        location.reload();
    }, 100);
}
