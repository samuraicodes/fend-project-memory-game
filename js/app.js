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


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
