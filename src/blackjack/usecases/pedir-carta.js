/**
 * 
 * @param {array<string>} deck This argument means to the definition of the deck of cards.
 * @returns {string} Return the last element of the deck that was remove from the array
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No quedan cartas en el deck';
    }
    return deck.pop();
}