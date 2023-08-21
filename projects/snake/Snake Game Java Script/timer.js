function startTimer() {
    // Initialize a variable called "timer" to 0.
    let timer = 0;
    
    // Set up an interval using setInterval() to execute a callback function every 1000 milliseconds (1 second).
    timerInterval = setInterval(() => {
        // Increment the "timer" by 1 to keep track of the elapsed time in seconds.
        timer++;
        
        // Create a new Date object based on the "timer" value multiplied by 1000 (to convert seconds to milliseconds).
        const date = new Date(timer * 1000);
        
        // Extract the minutes and seconds from the "date" object.
        const m = date.getMinutes();
        const s = date.getSeconds();
        
        // Display the elapsed time on the webpage in the format MM:SS (e.g., 04:30).
        // The "timerElem" element is assumed to be a designated HTML element where the timer is displayed.
        timerElem.innerHTML = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }, 1000);
}

// Start the timer immediately by calling the "startTimer()" function.
startTimer();
