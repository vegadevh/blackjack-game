/**
 * This function validated the dinal state of the game to verified how is the winner.
 * @param {number} puntosComputadora Variable refered to the computer score.
 * @param {number} puntosJugador Variable refered to the player score.
 */
export const validarVictoria = (puntosComputadora, puntosJugador) => {
    if (puntosComputadora === puntosJugador) {
        alert('Nadie gana');
    } else if (puntosJugador > 21) {
        alert('Gana la computadora');
    } else if (puntosComputadora > 21) {
        alert('Gana el jugador');
    } else if (puntosJugador === 21) {
        alert('Gana el jugador');
    } else {
        alert('Computadora gana')
    }
}