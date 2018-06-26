/* Deck Variable*/
const deck = document.querySelector(".deck");

/*Cards Variables*/

const selectCards = document.getElementsByClassName("card");
let listOpened = [];

/* Restart Variable */
const buttonRestart = document.querySelector(".restart");

/*Timekeeper Variables*/

let timekeeper;
let second = 0;
const timer = document.querySelector(".timer");

/* Moves Variables*/
let moves = 0;
let moveElement = document.querySelector(".moves");

/* Stars Variables*/
const stars = document.querySelector(".stars");
const starOne =  document.getElementById("starOne");
const starTwo =  document.getElementById("starTwo");

/* Modal Variable */

const modal = document.querySelector(".modal");

/* Game Code*/

/* Shuffle Cards. This function initialize the game. Create a array from the card class
list, call the shuffle function, loop on the listCards array and add a Event to the cards.
If the target has a card class, call the openCard, moveCounter and startTime.*/

function mixCards() {
  let listCards = shuffle(Array.from(selectCards));
        for (const shuffleCard of listCards) {
            deck.appendChild(shuffleCard);
            shuffleCard.addEventListener("click", function (event) {
                if (event.target.className === "card") {
                    openCard();
                    moveCounter();
                    startTime();
      }})}};

mixCards();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

buttonRestart.addEventListener('click', function () {
     location.reload(true);
})
