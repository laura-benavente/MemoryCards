import { Carta, crearColeccionDeCartasInicial, infoCartas } from './model';
import { GameUI } from './ui';

export class GameEngine {
    private cartas: Carta[];

    constructor() {
        this.cartas = crearColeccionDeCartasInicial(infoCartas);
    }

    public getCartas(): Carta[] {
        return this.cartas;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ui = new GameUI();
    ui.displayTwoCards();
})