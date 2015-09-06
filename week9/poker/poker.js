console.log("Playing Poker!");

var deck = {
  clubs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"],
  diamonds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"],
  hearts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"],
  spades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
}

var suits = ["clubs", "diamonds", "hearts", "spades"];

var bank = {
  cards: []
}

var player1 = {
  cards: []
}

var randomCard = function() {
  var suit = _.sample(suits);
  //console.log(suit);

  var type = _.sample(deck[suit]);
  //console.log(type);

  //console.log("Your card is " + type + " of " + suit);

  var card = [];
  card.push(suit);
  card.push(type);

  //console.log(card);

  return card;
}

var hand = function() {
  for (var i = 0; i < 2; i++) {
    var card = randomCard();
    //console.log(card);
    player1.cards.push(card);
  }
  for (var i = 0; i < 2; i++) {
    var card = randomCard();
    bank.cards.push(card);
  }
  console.log("Player 1 cards are " + player1.cards[0].reverse().join(" ") + " and " + player1.cards[1].reverse().join(" "));
  console.log("The Bank cards are " + bank.cards[0].reverse().join(" ") + " and " + bank.cards[1].reverse().join(" "));
}

var flop = function() {
  
}
