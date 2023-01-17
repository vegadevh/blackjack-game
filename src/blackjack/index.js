import _ from 'underscore';
import { crearDeck, pedirCarta, turnoComputadora, valorCarta, agregarCarta } from './usecases';

const game = (() => {
    let deck = [];

    //Arreglos de cartas
    const valores = ['A', 'J', 'Q', 'K'];
    const tipos = ['C', 'D', 'H', 'S'];

    //Referecias HTML
    const nuevoJuego = document.querySelector('#nuevoJuego');
    const pedir = document.querySelector('#pedirCarta');
    const detener = document.querySelector('#detener');

    const puntuacion = document.querySelectorAll('small');

    const jugadorCartas = document.querySelector('#jugador-cartas');
    const computadoraCartas = document.querySelector('#computadora-cartas');

    //Puntos de jugadores
    let puntosJugador = 0,
        puntosComputadora = 0;

    pedir.disabled = true;
    detener.disabled = true;

    //Eventos

    nuevoJuego.addEventListener('click', () => {
        deck = crearDeck(tipos, valores);
        nuevoJuego.disabled = true;
        pedir.disabled = false;
        detener.disabled = false;

        puntuacion[0].innerText = 0;
        puntuacion[1].innerText = 0;
        puntosJugador = 0;
        puntosComputadora = 0;

        jugadorCartas.innerHTML = '';
        computadoraCartas.innerHTML = '';

    });

    pedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);

        agregarCarta(carta, jugadorCartas);

        puntosJugador += valorCarta(carta);
        puntuacion[0].innerText = puntosJugador;

        if (puntosJugador > 21) {
            pedir.disabled = true;
            turnoComputadora(puntosJugador, puntuacion[1], computadoraCartas, deck);
            nuevoJuego.disabled = false;
            pedir.disabled = true;
            detener.disabled = true;
        } else if (puntosJugador === 21) {
            turnoComputadora(puntosJugador, puntuacion[1], computadoraCartas, deck);
            nuevoJuego.disabled = false;
            pedir.disabled = true;
            detener.disabled = true;
        }

    });

    detener.addEventListener('click', () => {
        nuevoJuego.disabled = false;
        pedir.disabled = true;
        detener.disabled = true;

        turnoComputadora(puntosJugador, puntuacion[1], computadoraCartas, deck);
    });

    // return {
    //     crearDeck
    // }

})()

