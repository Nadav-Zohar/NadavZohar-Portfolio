window.addEventListener("keydown", ev => {
    // Prevent the default behavior of the keyboard event.
    // This prevents actions like scrolling the page when arrow keys are pressed.
    ev.preventDefault();

    // Use a switch statement to handle different key presses.
    switch (ev.key) {
        case "ArrowUp":
            // If the "ArrowUp" key is pressed, call the `move()` function with "up" as the direction.
            move("up");
            break;
        case "ArrowRight":
            // If the "ArrowRight" key is pressed, call the `move()` function with "right" as the direction.
            move("right");
            break;
        case "ArrowDown":
            // If the "ArrowDown" key is pressed, call the `move()` function with "down" as the direction.
            move("down");
            break;
        case "ArrowLeft":
            // If the "ArrowLeft" key is pressed, call the `move()` function with "left" as the direction.
            move("left");
            break;
        case "Escape":
            // If the "Escape" key is pressed, clear the interval responsible for automatic movement.
            // This effectively stops the automatic movement of the Snake.
            clearInterval(interval);
            break;
    }
});
