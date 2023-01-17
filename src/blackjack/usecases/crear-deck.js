import _ from 'underscore';

/**
 * This function generates a new deck for the game.
 * @param {array<string>} tipos 
 * @param {array<string>} valores 
 * @returns {array<array>} This function return a new deck with all the 52 cards.
 */

export const crearDeck = (tipos, valores) => {

    if (!tipos && tipos.length === 0) throw new Error('Los tipos son obligatorios y debe ser un arreglo de string');
    if (!valores && valores.length === 0) throw new Error('Los valores son obligatorios y debe ser un arreglo de string');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (const valor of valores) {
        for (const tipo of tipos) {
            deck.push(valor + tipo);
        }
    }
    deck = _.shuffle(deck);
    return _.shuffle(deck);
}
