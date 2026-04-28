/**
 * @typedef {Object} Gioco
 * @property {string} titolo - Il nome del videogioco.
 * @property {string} piattaforma - La console o sistema (es. PS5, PC).
 * @property {string} genere - Il genere del gioco (es. RPG, FPS).
 * @property {number} anno - L'anno di pubblicazione.
 * @property {string} studio - La software house che ha sviluppato il gioco.
 */
let collezione = [];

/**
 * Crea un oggetto videogioco.
 * @param {string} titolo 
 * @param {string} piattaforma 
 * @param {string} genere 
 * @param {string} anno 
 * @param {string} studio 
 * @returns {Gioco} L'oggetto gioco creato.
 */
const creaGioco = (titolo, piattaforma, genere, anno, studio) => {
    return{
        titolo: titolo,
        piattaforma: piattaforma,
        genere: genere,
        anno: parseInt(anno),
        studio: studio
    };
};

/**
 * Aggiunge un gioco alla collezione locale.
 * @param {Gioco} gioco - L'oggetto gioco da inserire.
 */
function aggiungiGioco(gioco){
    collezione.push(gioco);
}

/**
 * Rimuove un gioco dalla collezione in base al titolo.
 * @param {string} titoloDaCancellare 
 * @returns {boolean} True se rimosso, false altrimenti.
 */
function rimuoviGioco(titoloDaCancellare){
    const lunghezzaIniziale = collezione.length;
    collezione = collezione.filter(g => g.titolo.toLowerCase() !== titoloDaCancellare.toLowerCase());
    return collezione.length < lunghezzaIniziale;
}

/**
 * Restituisce l'intera collezione.
 * @returns {Gioco[]}
 */
function ottieniTutti(){
    return collezione;
}

/**
 * Filtra la collezione per una specifica proprietà.
 * @param {'piattaforma' | 'genere'} proprieta 
 * @param {string} valore 
 * @returns {Gioco[]} Lista filtrata.
 */
const filtraPer = (proprieta, valore) =>{
    return collezione.filter(g => g[proprieta].toLowerCase() === valore.toLowerCase());
};

/**
 * Ordina la collezione (crea una copia per non modificare l'originale).
 * @param {'titolo' | 'anno'} proprieta 
 * @returns {Gioco[]} Lista ordinata.
 */
function ordinaPer(proprieta){
    return [...collezione].sort((a, b) => {
        if(a[proprieta] < b[proprieta]){
            return -1;
        }
        if(a[proprieta] > b[proprieta]){
            return 1;
        }
        return 0;
    });
}

/**
 * Ricerca testuale all'interno di titolo o studio.
 * @param {string} testo - Parte del testo da cercare.
 * @returns {Gioco[]} Risultati della ricerca.
 */
const cercaGioco = (testo) =>{
    const t = testo.toLowerCase();
    return collezione.filter(g => g.titolo.toLowerCase().includes(t) || g.studio.toLowerCase().includes(t));
};

module.exports = {
    creaGioco,
    aggiungiGioco,
    rimuoviGioco,
    ottieniTutti,
    filtraPer,
    ordinaPer,
    cercaGioco
};
