// Function to start the game timer
function startTimer() {
    // Initialize the timer to 0 seconds
    let timer = 0;

    // Use setInterval to create an interval that runs every 1000 milliseconds (1 second)
    // The arrow function inside setInterval will be executed every second
    timerInterval = setInterval(() => {
        // Increment the timer by 1 second
        timer++;

        // Create a new Date object based on the current timer value (in milliseconds)
        const date = new Date(timer * 1000);

        // Get the minutes and seconds from the Date object
        const m = date.getMinutes();
        const s = date.getSeconds();

        // Update the innerHTML of the timerElem element to display the current time in the format "mm:ss"
        timerElem.innerHTML = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }, 1000);
}
