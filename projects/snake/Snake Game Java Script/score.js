function score() {
    // Calculate the score based on the length of the snake
    // The length of the snake represents the number of segments in the snake's body,
    // excluding the head. Subtract 7 from the length because the initial length of the snake is 7 segments.
    // Multiply the result by 10 to get the score.
    scoreElem.innerHTML = (snake.length - 7) * 10;
}
