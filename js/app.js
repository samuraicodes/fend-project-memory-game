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

function openCard() {
     event.target.className = "card open";
     listOpened.push(event.target);
     if (listOpened.length === 2){
           compareClass();
}}

function compareClass() {
  if (listOpened[0].innerHTML ===
      listOpened[1].innerHTML){
    for (let match of listOpened){
      match.className = "card match"
    }
    listOpened.length = 0;
    if (document.getElementsByClassName("match").length === 16){
    stopTime();
    finishModal();
    }
  } else {
    setTimeout(function(){
      for (let cardClass of listOpened){
        cardClass.className = "card"
      }
      listOpened.length = 0;
    },0300);
  }}

  function moveCounter() {
      if (listOpened.length === 2) {
      moves++;
      starsRemove();
      if (moves === 1) {
        moveElement.innerHTML = "1 Move";
      }else{
        moveElement.innerHTML = moves + " Moves";
      }
  }}

  function starsRemove() {
    if (moves === 10) {
                starOne.style.color = "#370d42";
    }else if (moves === 15) {
                starOne.className = ""
                starTwo.style.color = "#370d42";
    }else if (moves === 20) {
                starTwo.className = ""
  }}

  function startTime() {
    if (second === 0 && listOpened.length === 1){
      timekeeper = setInterval(function () {
        timer.innerHTML = second + " sec in the Space";
          second++;
      }, 1000);
    }}

    function stopTime() {
        clearInterval(timekeeper);
    }

    function finishModal() {
      modal.innerHTML = "You have conquered the universe!" +
                        "<br> Stars: " + "" + document.getElementsByClassName("stars").length +
                        "<br> Time in the Space: " + "" + second
                        + "<br> Moves: " + "" + moves
                        + "<br> Another trip?"
                        + "<br> Click here!";
      document.querySelector("#gameTitle").style.fontSize = "500%"
      timer.style.display = "none";
      deck.style.display = "none";
      moveElement.style.display = "none";
      buttonRestart.style.display = "none";
      stars.style.display = "none";
      modal.style.display = "block";
    }

    modal.addEventListener('click', function () {
          location.reload(true);
    })
