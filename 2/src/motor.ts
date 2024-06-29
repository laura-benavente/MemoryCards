import { Carta, crearColeccionDeCartasInicial, infoCartas } from './model';
import { GameUI } from './ui';


export class GameEngine {
    private cartas: Carta[];

    constructor() {
        this.cartas = crearColeccionDeCartasInicial(infoCartas);
    }

    public shuffleCards(): Carta[] {
        this.cartas = this.cartas.sort(() => Math.random() - 0.5);
        return this.cartas;
    }

    public getCartas(): Carta[] {
        return this.cartas;
    }
}

const shuffleButtonNode = document.getElementById('shuffleButton') 
const ui = new GameUI();
document.addEventListener('DOMContentLoaded', () => {
if (
    shuffleButtonNode !== undefined && shuffleButtonNode !== null 
){
    shuffleButtonNode.addEventListener('click', () => ui.shuffleAndDisplayCards())
}

ui.displaySingleCard();

})