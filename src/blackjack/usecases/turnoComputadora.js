import { pedirCarta, valorCarta, validarVictoria, agregarCarta } from "./";
//Turno computadora
/**
 * This fucntion validate the score for the computer
 * @param {Number} puntosJugador Variable thet refers to the player score
 * @param {HTMLElement} puntosHTML HTML Element for show the computer score
 * @param {Array<String>} deck An array of strings to take a card from the actual deck of cards
 */
export const turnoComputadora = (puntosJugador, puntosHTML, computadoraCartas, deck = []) => {

    if (!puntosJugador) throw new Error('Los puntosJugador son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        agregarCarta(carta, computadoraCartas);

        puntosComputadora += valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

    } while (puntosComputadora < puntosJugador && (puntosJugador < 21));

    setTimeout(() => {
        validarVictoria(puntosComputadora, puntosJugador);
    }, 100);

}