import { Carta } from './model';
import { GameEngine } from './motor';

export class GameUI {
    private engine: GameEngine;

    constructor() {
        this.engine = new GameEngine();
    }

    public shuffleAndDisplayCards() {
        const cartas = this.engine.shuffleCards();
        this.displayCardsInConsole(cartas);
    }

    private displayCardsInConsole(cartas: Carta[]) {
        console.log(cartas)
    }
}
