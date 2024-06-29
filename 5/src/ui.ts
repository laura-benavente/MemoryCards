import { Tablero, crearTableroInicial } from './model';
import { voltearLaCarta, sonPareja, parejaEncontrada, parejaNoEncontrada, iniciaPartida, sePuedeVoltearLaCarta } from './motor';

let tablero: Tablero = crearTableroInicial();

const iniciarJuego = () => {
  iniciaPartida(tablero);
  renderizarTablero(tablero);
};

const renderizarTablero = (tablero: Tablero) => {
  const tableroElement = document.getElementById('tablero');
  if (!tableroElement) return;

  tableroElement.innerHTML = '';
  tablero.cartas.forEach((carta, index) => {
    const cartaElement = document.createElement('div');
    cartaElement.classList.add('carta');
    cartaElement.dataset.index = index.toString();
    
    if(carta.estaVuelta) {
      cartaElement.innerHTML = `<img src=${carta.imagen} style="width: 100%; height: 100%;">`;
      cartaElement.classList.add('flipped');
      cartaElement.classList.remove('unflipped');

    } else {
      cartaElement.classList.remove('flipped');
      cartaElement.classList.add('unflipped');
    }

    tableroElement.appendChild(cartaElement);

    cartaElement.addEventListener('click', () => manejarClickCarta(index));
  });
};

const manejarClickCarta = (index: number) => {
  if (!sePuedeVoltearLaCarta(tablero, index)) {
    return;
  }

  voltearLaCarta(tablero, index);
 renderizarTablero(tablero);

  if (tablero.estadoPartida === "DosCartasLevantadas") {
    const indiceA = tablero.indiceCartaVolteadaA!;
    const indiceB = tablero.indiceCartaVolteadaB!;

    if (sonPareja(indiceA, indiceB, tablero)) {
      parejaEncontrada(tablero, indiceA, indiceB);
    } else {
      setTimeout(() => {
        parejaNoEncontrada(tablero, indiceA, indiceB);
        renderizarTablero(tablero);
      }, 1000);
    }
  }
};

const startButtonNode = document.getElementById('start-game')

if(startButtonNode !== undefined && startButtonNode !== null) {
  startButtonNode.addEventListener('click', iniciarJuego);
}


