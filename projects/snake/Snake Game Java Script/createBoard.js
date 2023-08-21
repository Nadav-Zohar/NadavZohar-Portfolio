function createBoard() {
    // Loop to create the grid of div elements representing the cells of the game board
    // The loop iterates from i=0 to i < width * height
    for (let i = 0; i < width * hight; i++) {
        // Create a new div element for each cell
        const div = document.createElement("div");

        // Append the newly created div element to the board element
        board.appendChild(div);
    }

    // Function call to set the initial color for each cell of the board
    color();

    // Function call to place a "blueberry" at a random position on the board
    setRandom();
}
