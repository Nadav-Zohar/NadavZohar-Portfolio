// Function to set a "blueberry" at a random position on the board
function setRandom() {
    // Generate a random number within the range of available cells on the board
    random = Math.floor(Math.random() * (width * hight));

    // Check if the randomly selected cell is already part of the snake (snake includes that cell)
    if (snake.includes(random)) {
        // If the cell is part of the snake, recursively call setRandom() to get another random position
        setRandom();
    } else {
        // If the cell is not part of the snake, proceed to set the "blueberry" on the board

        // Select all the div elements on the board
        const divs = board.querySelectorAll("div");

        // Remove the "blueberry" class from all div elements on the board
        divs.forEach(el => el.classList.remove("blueberry"));

        // Add the "blueberry" class to the div at the randomly selected position
        divs[random].classList.add("blueberry");
    }
}
