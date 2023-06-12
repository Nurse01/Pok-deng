// let bet =0;

let card = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
let cardDealer = [];
let cardPlayer = [];
let playerScore = 0;
let dealerScore = 0;

//3- func randomCard for random card to player and dealer
function randomCard() {
  let random = Math.floor(Math.random() * 13);

  return card[random];
}
// 2- function for player start game
function player() {
  let bet = prompt('Enter your bet');
  // dealer give 2 card to player
  let card1 = randomCard();
  let card2 = randomCard();
  cardPlayer.push(card1, card2);
  console.log(cardPlayer);
  // check score for player
playerScore = scoring("player"+cardPlayer);
  // Call dealer function to start dealer turn
  dealer();
}
// 4- function for player start game
function dealer() {
  // dealer give 2 card to himeself
  let card1 = randomCard();
  let card2 = randomCard();
  cardDealer.push(card1, card2);
  console.log("dealer"+cardDealer);

  // check score for dealer
DealerScore = scoring(cardDealer);
  // Call check score function to check all score
  compareScore(playerScore, dealerScore);
}
// 6- function for check who win
function compareScore(playerScore, dealerScore) {
  if (playerScore > dealerScore) {
    console.log('Player win');
  } else if (playerScore < dealerScore) {
    console.log('Dealer win');
  } else {
    console.log('Draw');
  }
  // Give beat

}
// 5- function for scoring each player
function scoring(card) {
  for (let i = 0; i < card.length; i++) {
    // check special case card
    if (card[i] == 'J' || card[i] == 'Q' || card[i] == 'K') {
      playerScore += 10;
    } else if (card[i] == 'A') {
      playerScore += 1;
    } else {
      playerScore += card[i];
    }
  }
}

// 1- start to play game
player();
