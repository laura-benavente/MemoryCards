import { GameEngine } from "./motor";

export class GameUI {
    private engine: GameEngine;
    private cardsContainer: HTMLElement;

    constructor() {
        this.engine = new GameEngine();
        this.cardsContainer = document.getElementById('cardsContainer') as HTMLElement;
    }

    public displayCardGrid() {
        const cartas = this.engine.getCartas();
        this.cardsContainer.innerHTML = '';
        cartas.forEach(carta => {
            console.log(carta)
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            this.cardsContainer.appendChild(cardElement);
        });
    }
}
