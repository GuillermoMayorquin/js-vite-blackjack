/**
 * Esta funcion devuelve el valor en puntos de una carta
 * @param {String} carta La carta que se obtuvo con la funcion pedirCarta
 * @returns {number} Retorna el valor en puntos de la carta que entra en los parametros
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}