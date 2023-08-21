function createBoard() {
    // Get the selected amount of cards from the dropdown with the ID "select"
    const amount = select.value;

    // Create an empty array to store the numbers to be displayed on the cards
    const numbers = [];

    // Set the grid template columns of the board to create a 5-column layout
    board.style.gridTemplateColumns = `repeat(5, 1fr)`;

    // Generate a list of numbers to be displayed on the cards, with each number repeated twice
    for (let i = 1; i <= amount; i++) {
        numbers.push(i, i);
    }

    // Loop to create and display the cards with randomized numbers
    for (let i = 1; i <= amount * 2; i++) {
        // Generate a random index to select a number from the numbers array
        const rand = Math.floor(Math.random() * numbers.length);

        // Create a new div element representing a card and set its cursor to "pointer"
        const div = document.createElement("div");
        div.style.cursor = "pointer";

        // Set the innerHTML of the card to display the number from the selected index
        div.innerHTML = `<span>${numbers[rand]}</span>`;

        // Append the card to the board element
        board.appendChild(div);

        // Remove the selected number from the numbers array to avoid duplicates
        numbers.splice(rand, 1);

        // Add a click event listener to the card
        div.addEventListener("click", ev => {
            // If the clicked card is hidden, do nothing (ignore the click)
            if (ev.target.classList.contains("hidden")) {
                return;
            }

            // If there are already two cards showing, do nothing (ignore the click)
            if (board.querySelectorAll(".showing").length == 2) {
                return;
            }

            // Otherwise, show the clicked card by adding the "showing" class to it
            ev.target.classList.add("showing");

            // Remove the "cheat" class from all cards to reset any previous cheats
            board.querySelectorAll(".cheat").forEach(elem => elem.classList.remove("cheat"));

            // Get all cards that are not currently showing (hidden cards)
            const elements = board.querySelectorAll("div:not(.showing)");

            // Loop through the hidden cards and check if any of them have the same number as the clicked card
            for (const elem of elements) {
                if (elem.textContent == ev.target.textContent) {
                    // If a card with the same number is found, add the "cheat" class to it to visually indicate it's a matching card
                    elem.classList.add("cheat");
                    break;
                }
            }

            // Call the check() function (not provided in this code) to compare the two showing cards and handle matching or non-matching behavior
            check();
        });
    }
}

// Call the createBoard() function to generate the game board
createBoard();
