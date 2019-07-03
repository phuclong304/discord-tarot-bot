//imports
const tarot = require('../carddecks/riderwaite.json');
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');

async function onecard (message) {
  try{
    var deck = tarot.cards;
    var cardMax = deck.length;
    var random = Math.floor(Math.random() * (cardMax - 1));
    var card = deck[random];
    message.channel.send(`Your card is ${card}.`);
    meaning = book.checkBook(card);
    message.channel.send(meaning);
  } catch (err) {
    console.log(err);
  }
}

module.exports = onecard;
