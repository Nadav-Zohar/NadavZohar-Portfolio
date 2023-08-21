function color() {
    // Select all the div elements on the board
    const divs = board.querySelectorAll("div");

    // Remove all the previous classes from the cells to reset their appearance
    divs.forEach(el => el.classList.remove("snake", "head", "right", "left", "down", "up"));

    // Add the "snake" class to all the cells that represent the segments of the Snake's body
    // The positions of the segments are stored in the "snake" array
    snake.forEach(num => divs[num].classList.add("snake"));

    // Add the "head" class to the cell that represents the head of the Snake
    // The position of the head is stored in the "head" variable
    // Additionally, add a class representing the current direction of movement (e.g., "right", "left", "down", "up")
    // This is done using the "direction" variable, which is updated in the "move()" function
    divs[head].classList.add("head", direction);
}
