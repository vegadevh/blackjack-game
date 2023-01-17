/**
 * This function recive an string that means the value of the card that is removed from the deck of cards to take his score and being added to the score of the player
 * @param {String} carta 
 * @returns {Number}
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10)
        : valor * 1;
}