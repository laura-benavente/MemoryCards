export interface Carta {
    idFoto: number;
    imagen: string;
    estaVuelta: boolean;
    encontrada: boolean;
}

export const infoCartas: Carta[] = [
    { idFoto: 1, imagen: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png', estaVuelta: false, encontrada: false },
    { idFoto: 2, imagen: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png', estaVuelta: false, encontrada: false },
    { idFoto: 3, imagen: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png', estaVuelta: false, encontrada: false },
    { idFoto: 4, imagen: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png', estaVuelta: false, encontrada: false },
    { idFoto: 5, imagen: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png', estaVuelta: false, encontrada: false },
    { idFoto: 6, imagen: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png', estaVuelta: false, encontrada: false }
];

export const crearColeccionDeCartasInicial = (infoCartas: Carta[]): Carta[] => {
    const cartas = infoCartas.concat(infoCartas); // duplicamos las cartas
    return cartas;
};
