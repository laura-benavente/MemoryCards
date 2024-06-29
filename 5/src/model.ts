// model.ts

export interface Carta {
    idFoto: number;
    imagen: string;
    estaVuelta: boolean;
    encontrada: boolean;
  }
  
  interface InfoCarta {
    idFoto: number;
    imagen: string;
  }
  
  const infoCartas: InfoCarta[] = [
    { idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png" },
    { idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png" },
    { idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png" },
    // Añadir más cartas si se desea
  ];
  
  const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
  });
  
  const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    const cartas: Carta[] = [];
    infoCartas.forEach((carta) => {
      cartas.push(crearCartaInicial(carta.idFoto, carta.imagen));
      cartas.push(crearCartaInicial(carta.idFoto, carta.imagen));
    });
    return cartas;
  };
  
  export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);
  
  export interface Tablero {
    cartas: Carta[];
    estadoPartida: EstadoPartida;
    indiceCartaVolteadaA?: number;
    indiceCartaVolteadaB?: number;
  }
  
  export type EstadoPartida =
    | "PartidaNoIniciada"
    | "CeroCartasLevantadas"
    | "UnaCartaLevantada"
    | "DosCartasLevantadas"
    | "PartidaCompleta";
  
  export const crearTableroInicial = (): Tablero => ({
    cartas: cartas,
    estadoPartida: "PartidaNoIniciada",
  });
  