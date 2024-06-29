import { GameEngine } from "./motor";

export class GameUI {
  private engine: GameEngine;
  private cardContainer1: HTMLElement;
  private cardContainer2: HTMLElement;

  constructor() {
    this.engine = new GameEngine();
    this.cardContainer1 = document.getElementById(
      "cardContainer1"
    ) as HTMLElement;
    this.cardContainer2 = document.getElementById(
      "cardContainer2"
    ) as HTMLElement;
  }

  public displayTwoCards() {
    const cartas = this.engine.getCartas();
    const carta1 = cartas[0];
    const carta2 = cartas[1];

    this.cardContainer1.addEventListener("click", () => {
      this.cardContainer1.innerHTML = `<img src=${carta1.imagen} style="width: 100%; height: 100%;">`;
      this.cardContainer1.classList.add("flipped");
    });

    this.cardContainer2.addEventListener("click", () => {
      this.cardContainer2.innerHTML = `<img src=${carta2.imagen} style="width: 100%; height: 100%;">`;
      this.cardContainer2.classList.add("flipped");
    });
  }
}
