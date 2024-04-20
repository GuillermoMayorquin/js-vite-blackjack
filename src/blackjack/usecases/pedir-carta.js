
/**
 * Esta función permite tomar una carta del deck
 * @param {Array<String>} deck El deck creado con la funcion crearDeck
 * @returns {String} Retorna la ultima carta del deck.
 */

export const pedirCarta = ( deck ) => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}