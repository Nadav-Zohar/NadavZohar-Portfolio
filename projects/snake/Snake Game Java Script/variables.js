const hight= 40;
const width= 50;

const snake= [6, 5, 4, 3, 2, 1, 0];
let head= snake[0];

let interval;

let direction;

let isGameOver= false;

let random;

let rightBoundaries= [];
let leftBoundaries= [];

const board= document.querySelector(".board");
board.style.gridTemplateColumns= `repeat(${width}, 1fr)`

const timerElem= document.querySelector(".timerElem");
const scoreElem= document.querySelector(".scoreElem");

