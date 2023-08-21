// Global variable to hold the value of 200 milliseconds
let miliSec = 200;

// Function to start automatic movement
function startAuto() {
    // Clear any existing interval to prevent overlapping intervals
    clearInterval(interval);

    // Set up a new interval using setInterval
    // The arrow function inside setInterval will be executed every `miliSec` milliseconds
    interval = setInterval(() => move(direction), miliSec);
}
