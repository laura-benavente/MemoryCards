import { Carta } from "./model";
import { GameEngine } from "./motor";

export class GameUI {
  private engine: GameEngine;
  private cardContainer: HTMLElement;

  constructor() {
    this.engine = new GameEngine();
    this.cardContainer = document.getElementById(
      "cardContainer"
    ) as HTMLElement;
  }

  public shuffleAndDisplayCards() {
    const cartas = this.engine.shuffleCards();
    this.displayCardsInConsole(cartas);
  }

  private displayCardsInConsole(cartas: Carta[]) {
    console.log(cartas);
  }
  public displaySingleCard() {
    const carta = this.engine.getCartas()[0]; // solo tomamos la primera carta para la prueba

    this.cardContainer.addEventListener("click", () => {
    this.cardContainer.innerHTML = `<img src=${carta.imagen} style="width: 100%; height: 100%;">`;
    this.cardContainer.classList.add("flipped");

    //   const imgElement = this.cardContainer.querySelector("img");
    //   if (imgElement) {
    //     imgElement.src = carta.imagen;
    //     this.cardContainer.classList.add("flipped");
    //   }
    });
  }
}
