let collezione = [];

const creaGioco = (titolo, piattaforma, genere, anno, studio) => {
    return {
        titolo: titolo,
        piattaforma: piattaforma,
        genere: genere,
        anno: parseInt(anno),
        studio: studio
    };
};

function aggiungiGioco(gioco) {
    collezione.push(gioco);
}

function rimuoviGioco(titoloDaCancellare) {
    const lunghezzaIniziale = collezione.length;
    collezione = collezione.filter(g => g.titolo.toLowerCase() !== titoloDaCancellare.toLowerCase());
    return collezione.length < lunghezzaIniziale;
}

function ottieniTutti() {
    return collezione;
}