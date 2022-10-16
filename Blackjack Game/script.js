let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

let player = {
  name: "Daud",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + "$" + player.chips;

let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startGame);
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  cards.forEach((card) => {
    cardsEl.textContent += card + " ";
  });

  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw new card?";
  } else if (sum === 21) {
    message = "You have got a blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

let cardBtn = document.getElementById("cardBtn");
cardBtn.addEventListener("click", () => {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
});
