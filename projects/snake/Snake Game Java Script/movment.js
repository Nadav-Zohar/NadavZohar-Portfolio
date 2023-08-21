function move(dir) {
    // If the game is already over, return and do nothing
    if (isGameOver) {
        return;
    }

    // Select all the div elements on the board
    const divs = board.querySelectorAll("div");

    // Logic to handle movement based on the specified direction (dir)
    if (dir === "up") {
        // If the current direction is "down," return and do nothing to avoid moving backward
        if (direction === "down") {
            return;
        }

        // Move the head position up by one row (substracting the width)
        head -= width;

        // Check if the new head position is outside the board boundaries
        // If it is, the game is over
        if (!divs[head]) {
            gameOver();
            return;
        }
    } else if (dir === "right") {
        // If the current direction is "left," return and do nothing to avoid moving backward
        if (direction === "left") {
            return;
        }

        // Move the head position one step to the right
        head++;

        // Check if the new head position is on the right boundary (rightBoundaries array)
        // If it is, the game is over
        if (rightBoundaries.includes(head)) {
            gameOver();
            return;
        }
    } else if (dir === "down") {
        // If the current direction is "up," return and do nothing to avoid moving backward
        if (direction === "up") {
            return;
        }

        // Move the head position down by one row (adding the width)
        head += width;

        // Check if the new head position is outside the board boundaries
        // If it is, the game is over
        if (!divs[head]) {
            gameOver();
            return;
        }
    } else if (dir === "left") {
        // If the current direction is "right," return and do nothing to avoid moving backward
        if (direction === "right") {
            return;
        }

        // Move the head position one step to the left
        head--;

        // Check if the new head position is on the left boundary (leftBoundaries array)
        // If it is, the game is over
        if (leftBoundaries.includes(head)) {
            gameOver();
            return;
        }
    }

    // Check if the head collides with any part of the snake's body
    // If it does, the game is over
    if (snake.includes(head)) {
        gameOver();
        return;
    }

    // Update the current direction with the specified direction (dir)
    direction = dir;

    // Add the new head position to the front of the snake array
    snake.unshift(head);

    // Check if the snake's head position matches the "blueberry" position (random)
    // If it does, the snake ate the "blueberry"
    if (random === head) {
        // Create an audio element to play the eating sound
        const eatingSound = document.createElement("audio");
        eatingSound.src = "../../../projects/snake/SnakeGame Sound/Pebble.ogg";
        eatingSound.volume = 0.4;

        // Play the eating sound
        eatingSound.play();

        // Place a new "blueberry" at a random position on the board
        setRandom();

        // Increase the score and update the game speed (decrease the interval)
        score();
        miliSec = miliSec - 1;
    } else {
        // If the snake didn't eat a "blueberry," remove the last segment of the snake
        // This allows the snake to move forward
        snake.pop();
    }

    // Update the colors of the cells on the board to represent the new state of the game
    color();

    // Start the automatic movement (continuously call the move() function at the updated interval)
    startAuto();
}
