/**
 * This function helps to draw the image of the card to the deck of the player
 * @param {*} carta This is the variable returned frm the end of the array after an pop() method.
 * @param {*} barajaJugador This variable indicates that a HTMML references in need it th==o draw the card in there
 */
export const agregarCarta = (carta, barajaJugador) => {
    if (!carta) throw new Error('La carta es un valor obligatorio');
    if (!barajaJugador) throw new Error('La baraja del jugador es un valor obligatorio');

    const imagenCarta = document.createElement('img');
    imagenCarta.src = `./assets/images/cartas/${carta}.png`;
    imagenCarta.className = 'carta';
    barajaJugador.append(imagenCarta);
}