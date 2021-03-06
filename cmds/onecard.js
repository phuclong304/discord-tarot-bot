//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const library = require('../functions/deckCheck.js');

async function onecard (args, message) {
  try{
    var deck = JSON.parse(JSON.stringify(library.deckCheck(message)));
    if (deck == undefined) {
      message.reply ("Error retrieving deck.");
    }
    var cardMax = deck.cards.length;
    var random = Math.floor(Math.random() * (cardMax - 1));
    var card = deck.cards[random];
    message.channel.send(`Your card is ${card}.`);
    var meaning = book.checkBook(card, deck);
    message.channel.send(meaning);
  } catch (err) {
    console.log(err);
  }
}

module.exports = onecard;
